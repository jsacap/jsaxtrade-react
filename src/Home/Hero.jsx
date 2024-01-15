import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Hero = ({ title, description, backgroundImage }) => {
  return (
    <Box
      w="100%"
      h="100vh"
      bgImage={`url(${backgroundImage})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      _before={{ 
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        bg: "blackAlpha.600", 
        zIndex: "1",
      }}
    >
      <Box position="relative" zIndex="2"> {/* Ensure text is above the overlay */}
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