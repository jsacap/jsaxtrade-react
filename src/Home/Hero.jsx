import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Hero = ({ title, description, background, backgroundType }) => {
  const isVideoBackground = backgroundType === 'video';

  return (
    <Box
      w="100%"
      h="100vh"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      overflow="hidden"
    >
      {isVideoBackground && (
        <>
          <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', top: 0, left: 0 }}>
            <source src={background} type="video/mp4" />
          </video>
          <Box
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            bg="blackAlpha.800"
            zIndex="1"
          />
        </>
      )}
      {!isVideoBackground && (
        <Box
          bg={`url(${background})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
        />
      )}
      <Box position="relative" zIndex="2"> 
        <Heading as="h1" size="4xl" color="white">
          {title}
        </Heading>
        <Text as="h3" fontSize="xl" color="white" mt={4}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Hero;
