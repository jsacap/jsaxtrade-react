import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const VideoBackgroundSection = ({ videoSrc, children }) => {
  return (
    <Box position="relative" w="100%" h="100vh">
      <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Flex position="absolute" top="0" left="0" right="0" bottom="0" justifyContent="center" alignItems="center">
        {children}
      </Flex>
    </Box>
  );
};

export default VideoBackgroundSection;
