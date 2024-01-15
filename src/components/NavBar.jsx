import React, { useState } from "react";
import { Box, Flex, Text, Button, Link, IconButton, Collapse, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" w="100%" bg="navyAlpha.700" color="white">
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
      <Link>Blog</Link>
      <Link>Trader</Link>
      <Link>Investor</Link>
    </Stack>
  </Box>
</Collapse>


      <Box display={{ base: "none", md: "block" }}>
        <Flex align="center">
          <Link px={2}>Blog</Link>
          <Link px={2}>Trader</Link>
          <Link px={2}>Investor</Link>
        </Flex>
      </Box>

      <Box>
        <Button variant="outline" _hover={{ bg: "gray.700", borderColor: "gray.700" }}>Login</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
