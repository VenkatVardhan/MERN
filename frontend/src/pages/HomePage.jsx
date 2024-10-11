import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useProductsStore } from '../store/products'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'



function HomePage() {
  const{products,fetchProducts}=useProductsStore()
  useEffect(()=>{
    fetchProducts()
  },[fetchProducts])
  console.log(products)
  

    return (
    <Container maxW={"container.lg"} >
      <VStack spacing={8}>
        <Text
           bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip='text'
                fontSize='28'
                fontWeight='bold'
                textAlign={"center"}>
                Current Products
        </Text>
        <SimpleGrid
        columns={{
          base:1,
          md:2,
          lg:3
        }}
        spacing={10}
        w={"full"}
        >
          {products.map((product)=>(
            <ProductCard key={product._id} product={product}/>
            
          ))}
          
        </SimpleGrid>
        {products.length==0 &&
                <Text
          
                fontSize='xl'
                fontWeight='bold'
                textAlign={"center"}>
                No Products
        
        <Link to ="/create">
        <Text as ={"span"} color ={"blue.500"}_hover={{textDecoration:"underline"}}> Create Products</Text>
        </Link>
        </Text>}

      </VStack>
    </Container>

  )
}

export default HomePage
