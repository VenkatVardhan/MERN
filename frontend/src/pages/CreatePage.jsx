import { Button, Container, Heading, Input, VStack,Box, useColorMode, useColorModeValue, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductsStore } from '../store/products.js'

function CreatePage() {
    const [newProduct,setNewProduct]=useState({
        name:"",
        price:"",
        img:""
    })
    const {createProduct} = useProductsStore()
    const toast =useToast()
    const handleSubmit=async ()=>{
        const {success,message}=await createProduct(newProduct)
        if(!success){
            toast({
                title:"Error",
                description:message,
                isClosable:true,
                duration:5000,
                status:"error"

            })
        }

        else{
             toast({
                title:"Success",
                description:message,
                isClosable:true,
                duration:5000,
                status:"success"

            })
        }
        setNewProduct({name:"",price:"",img:""})

        }
 
    
  return (
    <Container
    maxW={"container.sm"}

    >
    <VStack 
    spacing={8}
    >
        <Heading as={"h1"} textAlign={"center"} size={"2xl"} mb={8}>Create New Product</Heading>
        <Box
        w={"full"}
        bg={useColorModeValue("white","gray.800")}
        p={6}
        shadow={"md"}
        >
        <VStack spacing={4}>
            <Input name={'name'} placeholder={'name'} value={newProduct.name} onChange={(e)=>{
                setNewProduct({...newProduct,name:e.target.value})
            }}/>
            <Input name={'price'} placeholder={'price'} value={newProduct.price} onChange={(e)=>{
                setNewProduct({...newProduct,price:e.target.value})
            }}/>
            <Input name={'img'} placeholder={'img'} value={newProduct.img} onChange={(e)=>{
                setNewProduct({...newProduct,img:e.target.value})
            }}/>
            <Button colorScheme={"blue"} onClick={handleSubmit}>Add Product</Button>
        </VStack>
        
        </Box>
    </VStack>


    </Container>

)

}
export default CreatePage
