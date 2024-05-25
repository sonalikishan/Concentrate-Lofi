import React from 'react'
import { Box, Stack, VStack, Heading, HStack, Button, Input, Text } from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return<Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"wgite"}>
<Stack direction={['column','row']}>
<VStack alignItems={"stretch"} w="full" px="4">
    <Heading size="md" textTransform={"uppercase"} textAlign={'center'}>
        Connect with me:
    </Heading>
    <HStack borderBottom={'2px solid white'} py="2">
        <Input placeHolder='Enter email here' border={"none"} borderRadius="none" outline={"none"} focusBorderColor="none"/>
        <Button 
        p={"0"}
        colorScheme={"purple"}
        variant={"ghost"}
        borderRadius={'0 20px 20px 0'}
        >
            <AiOutlineSend  size={20} />
        </Button>
    </HStack>
</VStack>
<VStack w={'full'}
borderLeft={["none", "1px solid white"]}
 borderRight={["none", "1px solid white"]}>
   <Heading size={"md"} textTransform={"uppercase"} textAlign={"center"}>

STUDY WITH LO-FI

   </Heading>
   <Text>All Rights Recieved</Text>
</VStack>

<VStack w={'full'}>

<Heading size={"md"} textTransform={"uppercase"}>
SOCIAL MEDIA

</Heading>
<Button variant={"link"} colorScheme={"purple"}>
    <a target={"black"} href="www.linkedin.com/in/sonali-kishan-b01110220">LinkedIn</a>

</Button>

<Button variant={"link"} colorScheme={"purple"}>
    <a target={"black"} href="https://github.com/sonalikishan">GitHub</a>

</Button>

<Button variant={"link"} colorScheme={"purple"}>
    <a target={"black"} href="https://www.instagram.com/heysonalii/">Instagram</a>
</Button>

</VStack>




</Stack>
  </Box>
}

export default Footer
