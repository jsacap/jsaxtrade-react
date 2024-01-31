import React, { useState } from "react";
import { Box, Flex, Text, Button, Link, IconButton, Collapse, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" w="100%" bg="black" color="white">
      <Flex align="center" mr={5}>
        <Text fontSize="lg" fontWeight="bold">JSAX Trade</Text>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant={"outline"}
          aria-label={"Toggle Navigation"}
        />
      </Box>

      <Collapse in={isOpen} animateOpacity>
  <Box
    display={{ base: "block", md: "none" }}
    position="absolute"
    bg="gray.600"
    w="full"
    p={4}
    mt={2}
    shadow="md"
    zIndex="20"
  >
    <Stack>
      <a href="https://sanchojralegre.com/marketblog" target="_blank" rel="noopener noreferrer">Blog</a>
      <a href="https://jsax-production.up.railway.app/trading/dashboard/" target="_blank" rel="noopener noreferenceer">Trader</a>
      <a href="https://jsax-production.up.railway.app/investor/" target="_blank" rel="noopener noreferrer">Investor</a>
    </Stack>
  </Box>
</Collapse>


<Flex align="center">
  <Box mr={4}><a href="https://sanchojralegre.com/marketblog" target="_blank" rel="noopener noreferrer">Blog</a></Box>
  <Box mr={4}><a href="https://jsax-production.up.railway.app/trading/dashboard/" target="_blank" rel="noopener noreferrer">Trader</a></Box>
  <a href="https://jsax-production.up.railway.app/investor/" target="_blank" rel="noopener noreferrer">Investor</a>
</Flex>


      <Box>
      <a href="https://jsax-production.up.railway.app/trading/dashboard/" target="_blank" rel="noopener noreferenceer">
        <Button variant="outline" _hover={{ bg: "gray.700", borderColor: "gray.700" }}>Login</Button>
        </a>
      </Box>
    </Flex>
  );
};

export default Navbar;
