import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import logo from '../assets/images/isl-logo.png'
import MobileNavBar from './MobileNavBar'

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex
      py={3}
      px={3}
      justifyContent='space-between'
      alignItems='center'
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="brand.lightBlueColor"
      backdropFilter="blur(6px)"
      zIndex={1000}
      boxShadow="sm"
      w="100%"
      maxW="100vw"
      overflowX="hidden"
    >
      <Box onClick={() => scrollToSection('home')} cursor="pointer">
        <img src={logo} alt='logo' style={{ height: '40px' }} />
      </Box>

      <Flex
        gap={5}
        alignItems="center"
        cursor="pointer"
        fontSize={["12px", "14px", "13px", "16px"]}
        fontWeight={500}
        color="brand.textColor"
        display={["none", "none", "flex"]}
        pr={8}
      >
        <Text _hover={{ color: "brand.btnBgColor" }} onClick={() => scrollToSection('home')}>
          Home
        </Text>
        <Text _hover={{ color: "brand.btnBgColor" }} onClick={() => scrollToSection('process')}>
          Our Process
        </Text>
        <Text _hover={{ color: "brand.btnBgColor" }} onClick={() => scrollToSection('advantage')}>
          Unique Advantage
        </Text>
        <Text _hover={{ color: "brand.btnBgColor" }} onClick={() => scrollToSection('testimonials')}>
          Testimonials
        </Text>
      </Flex>

      <Box display={["flex", "flex", "none"]}>
        <MobileNavBar scrollToSection={scrollToSection} />
      </Box>
    </Flex>
  );
}

export default Header;
