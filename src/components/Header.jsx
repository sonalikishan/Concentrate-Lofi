import React from 'react'
import { useDisclosure } from '@chakra-ui/react';
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {BiMenuAltLeft} from "react-icons/bi";
import { VStack, HStack } from '@chakra-ui/react';
const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
  return (
   <>
   <Button
   zIndex={'overlay'}
   pos={"fixed"}
   top={"4"}
   left={"4"}
   colorScheme="purple"
   p={'0'}
   w={'10'}
   h={'10'}
   borderRadius={"full"}
   onClick={onOpen}
   >
    <BiMenuAltLeft size={'20'}/>
    </Button>
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>STUDY WITH LOFI</DrawerHeader> 
          <DrawerBody>
<VStack alignItems={'flex-start'}>
    <Button onClick={'onClose'} variant={"ghost"} colorScheme={'purple'}>
        <Link to={'/'}>Home</Link>
    </Button>

    <Button onClick={'onClose'} variant={"ghost"} colorScheme={'purple'}>
        <Link to={'/virtualroom'}>Virtual Room</Link>
    </Button>

    <Button onClick={'onClose'} variant={"ghost"} colorScheme={'purple'}>
        <Link to={'/aboutme'}>About Me</Link>
    </Button>

  

</VStack>

<HStack pos={'absolute'} bottom={'10'} w={'full'} justifyContent={'space-evenly'}>
   <Button onClick={'onClose'} colorScheme={'purple'}>
    <Link to={'/login'}>Log In</Link>
   </Button>
   <Button  onClick={'onClose'} colorScheme={'purple'} variant={'outline'}>
    <Link to={'/signup'}>Sign Up</Link>
   </Button>

</HStack>


          </DrawerBody>
        </DrawerContent>
    </Drawer>   </>
  )
}

export default Header
