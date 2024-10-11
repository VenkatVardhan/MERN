import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Heading, Img, useColorModeValue,Text, IconButton, HStack, useToast, useDisclosure, Modal, ModalOverlay, ModalHeader, ModalBody, VStack, Input, ModalContent, ModalCloseButton, ModalFooter, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductsStore } from '../store/products'



const ProductCard=({product})=> {
    const bg=useColorModeValue("white","gray.800")
    const textColor=useColorModeValue("gray.600","gray.200")
    const{deleteProduct,updateProduct}=useProductsStore()
    const toast=useToast()
    const {isOpen,onOpen,onClose}=useDisclosure()
    const [updatedProduct,setUpdatedProduct]=useState(product)

    const handleUpdateProduct=async(pid,updatedProduct)=>{
      const {success,message}= await updateProduct(pid,updatedProduct)
      onClose()
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
                description:"product updated successfully",
                isClosable:true,
                duration:5000,
                status:"success"

            })

  }

      
    }
    const handleDeleteProduct= async (pid,updatedProduct)=>{
        const {success,message} =await deleteProduct(pid,updatedProduct)
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

  }}
  return (
    
    <Box
    shadow={'lg'}
    rounded={'lg'}
    overflow={"hidden"}
    transition={"all 0.3 "}
    _hover={{transform:"translateY(-5px)",shadow:"xl"}}

    bg={bg}
    >
        <Img src={product.img} alt={product.name} h={48} objectFit={"cover"} w="full"/>
        <Box p={4}>
        <Heading as={"h3"} size={'md'} mb={3}>{product.name}</Heading>
         <Text fontSize={'xl'} fontWeight={"bold"} mb={3} color={textColor}>₹{product.price} </Text> 
        <HStack spacing={2}>
					<IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
					<IconButton
						icon={<DeleteIcon />}
						onClick={() => handleDeleteProduct(product._id)}
						colorScheme='red'
					/>
		</HStack>
        </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
        <ModalHeader>
          Update Product
        </ModalHeader>
        <ModalCloseButton/>
        
        <ModalBody>
          <VStack spacing={4}>
            <Input placeholder='Product Name' name='name' value={updatedProduct.name} onChange={(e)=>setUpdatedProduct({...updatedProduct,name:e.target.value})}/>
            <Input placeholder='Price' name='price' value={updatedProduct.price} onChange={(e)=>setUpdatedProduct({...updatedProduct,price:e.target.value})}/>
            <Input placeholder='Image URL'  name='img' value={updatedProduct.img}  onChange={(e)=>setUpdatedProduct({...updatedProduct,img:e.target.value})}/>

          </VStack>

        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={()=>handleUpdateProduct(product._id,updatedProduct)}>Update</Button>
          <Button variant='ghost' onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
      </ModalOverlay>
    </Modal>
    </Box>


  )
}

export default ProductCard
