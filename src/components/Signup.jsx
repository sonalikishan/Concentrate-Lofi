import React from 'react'
import { Container, Text, VStack, Heading, Input, Link, Button, Avatar } from '@chakra-ui/react'
const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"170vh"} p={"16"}>
        <form>
            <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"} >
                <Heading>Sign Up to be a part of our Community!</Heading>
                <Avatar alignSelf={"center"} boxSize={'32'} />
             <Input  placeholder={"Name"} type={"text"} required focusBorderColor={'purple.500'}/>
             <Input  placeholder={"Password"} type={"password"} required focusBorderColor={'purple.500'}/>
<Button variant={"link"} alignSelf={'flex-end'}>
</Button>
<Button colorScheme={'purple'} type={"submit"}>Sign Up</Button>
<Text textAlign={"right"}>Already Signed Up? {'   '}
<Button variant={"link"} colorScheme={"purple"}>
    <Link to={"/login"}> Log In Now </Link>
</Button>
</Text>
            </VStack>
        </form>
</Container>
  );
};

export default Signup;

