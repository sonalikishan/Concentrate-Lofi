import React from 'react'
import { VStack, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import YouTube from 'react-youtube';
const VirtualRoom = () => {
  const videosArr = [
    'AZals4U6Z_I',
    'Sx4xVyXHl60',
    '6H-PLF2CR18',
    'l-2hOKIrIyI',
    'lTRiuFIWV54?',
    '/FxJ3zPUU6Y4',
    'KaSFoOF6Yw0',
    'p_2yoMlqpZs',
    'Udh9T3DQNjo',
    'uV9iu_48RJ4',
    '5vzw3LrnSrof',
  ];
  
const [videoId, setVideoId] = useState(videosArr[0]);
  return( 
   <Stack direction={["column","row"]} h={'100vh'}>
    <VStack w={'full'}>
    <YouTube
          videoId={videoId}
          opts={{
            width: '700px', 
            height: '500px', 
            playerVars: {
              autoplay: 1,
            },
          }}
        />
         <VStack alignItems={"flex-start"} p={'8'} w={'full'} overflowY={'auto'}>
            <Heading>Sample Video 1</Heading>
            <Text> This is a sample video </Text>
         </VStack>
    </VStack>
    <VStack w={['full', 'xl']} alignItems={"stretch"} p={"8"} spacing={"8"} overflowY={'auto'}>
{
  videosArr.map((item, index)=>
  (
    <Button variant={'ghost'} colorScheme={'purple'} onClick={() => setVideoId(item)}>
Lofi {index + 1}
    </Button>
  ))}

    </VStack>
   </Stack>
   
  );

};



export default VirtualRoom
