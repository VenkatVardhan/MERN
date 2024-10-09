import { Button, Container, Flex,HStack,Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {PlusSquareIcon} from '@chakra-ui/icons'
import {IoMoon} from 'react-icons/io5'
import {LuSun} from 'react-icons/lu'

function Navbar() {
     const {colorMode,toggleColorMode}=useColorMode()
  return (
    <div>
        <Container maxWidth={"1140px"} px={4}>
            <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"}
            }

            >
            <Text
             bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip='text'
                fontSize='28'
                fontWeight='bold'
                >
            Products Store 🛒
        </Text>
        <HStack
        spacing={3}
        alignItems={"center"}>
            <Link to='/create'>
            <Button><PlusSquareIcon fontSize={20}/></Button>
            </Link>
            <Button onClick={toggleColorMode}>
                {colorMode==="light"?<IoMoon/>:<LuSun size={25}/>}
            </Button>

        </HStack>
            </Flex>
        </Container>
      
    </div>
  )
}

export default Navbar
