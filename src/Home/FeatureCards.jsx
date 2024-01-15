import React from 'react';
import { SimpleGrid, Box, Icon, Text, useBreakpointValue } from '@chakra-ui/react';
// Import icons from Chakra UI Icons or any other icon library
import { MdSettings, MdStar, MdVisibility } from 'react-icons/md';

const features = [
  {
    icon: MdSettings,
    title: 'Feature 1',
    description: 'Description of Feature 1',
  },
  {
    icon: MdSettings,
    title: 'Feature 1',
    description: 'Description of Feature 1',
  },
  {
    icon: MdSettings,
    title: 'Feature 1',
    description: 'Description of Feature 1',
  },
  {
    icon: MdSettings,
    title: 'Feature 1',
    description: 'Description of Feature 1',
  },
  {
    icon: MdSettings,
    title: 'Feature 1',
    description: 'Description of Feature 1',
  },
  {
    icon: MdSettings,
    title: 'Feature 1',
    description: 'Description of Feature 1',
  },
  // ... add other 5 features here
];

const FeatureCard = ({ icon, title, description }) => (
  <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
    <Icon as={icon} w={10} h={10} />
    <Text mt={4} fontSize="xl" fontWeight="semibold">{title}</Text>
    <Text mt={2}>{description}</Text>
  </Box>
);

const FeatureCards = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <SimpleGrid columns={columns} spacing={10}>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </SimpleGrid>
  );
};

export default FeatureCards;
