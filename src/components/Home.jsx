import React from 'react'
import {Box, Heading, Image, Container, Text} from '@chakra-ui/react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import i1 from "../assets/i1.gif";
import i2 from "../assets/i2.gif";
import i3 from "../assets/i3.gif";
import i4 from "../assets/i4.gif";
import i5 from "../assets/i5.jpeg";
import { Stack } from '@chakra-ui/react';
const headingOptions = {
    pos: "absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%,-50%)",
    textTransform:"upperCase",
    p: "4",
    size: "2xl"
}

const Home = () => {
  return (
   <Box >
    <MyCarousel />
    <Container maxW={'container.xl'} minH={"100vh"}  p="16">
<Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m="auto">Welcome Traveller!</Heading>

<Stack h="full" p={"4"} alignItems={'center'} direction={['column', 'row']}>
    <Image src={i5} h={["40","400"]} filter={'hue-rotate(-130deg)'}></Image>
    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={'center'}>Enjoy Lo-fi Beats along with completing your assignments or reading your favourite books. We have your back</Text>
</Stack>

    </Container>
   </Box>
  );
}

const MyCarousel = () =>
(
        <Carousel autoplay infiniteloop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
<Box  h={'100vh'}>
    <Image  src={i1}/>
    <Heading bgColor={"blackAlpha.100"} color={"white"} {...headingOptions}>
        RELAX.READ.LISTEN
    </Heading>
</Box>
<Box   h={'100vh'}>
    <Image  src={i2}/>
    <Heading bgColor={"blackAlpha.100"} color={"white"} {...headingOptions}>
        YOUR HAPPY PLACE
    </Heading>
</Box>
<Box   h={'100vh'}>
    <Image  src={i3}/>
    <Heading bgColor={"blackAlpha.100"} color={"white"} {...headingOptions}>
        ENJOY THE MOMENT
    </Heading>
</Box>
<Box   h={'100vh'}>
    <Image  src={i4}/>
    <Heading bgColor={"blackAlpha.100"} color={"white"} {...headingOptions}>
        LIVE YOUR LIFE
    </Heading>
</Box>
        </Carousel>
)

export default Home
