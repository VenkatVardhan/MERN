import { Button, Container, Heading, Input, VStack,Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'

function CreatePage() {
    const [newProduct,setNewProduct]=useState({
        name:"",
        price:"",
        img:""
    })
    const handleSubmit=()=>{
        console.log(newProduct)
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
