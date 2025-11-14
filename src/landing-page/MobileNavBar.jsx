"use client";

import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Separator,
  Drawer,
  Portal,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CloseButton } from "@chakra-ui/react";
import logo from "../assets/images/isl-logo.png";

const MobileNavBar = ({ scrollToSection }) => {
  const [open, setOpen] = useState(false);

  const routesData = [
    { label: "Home", id: "home" },
    { label: "Our Process", id: "process" },
    { label: "Unique Advantage", id: "advantage" },
    { label: "Testimonials", id: "testimonials" },
  ];

  const handleClick = (id) => {
    scrollToSection(id);
    setOpen(false); 
  };

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <Drawer.Trigger asChild>
        <Box color="brand.textColor" cursor="pointer">
          <GiHamburgerMenu style={{ width: "35px", height: "35px" }} />
        </Box>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop /> {/* click outside to close */}
        <Drawer.Positioner>
          <Drawer.Content
            bg="brand.lightBlueColor"
            color="brand.table"
            borderTopLeftRadius="lg"
            borderBottomLeftRadius="lg"
            maxW="280px"
            h="100vh"
          >
            {/* Header */}
            <Flex
              justify="space-between"
              align="center"
              px={4}
              py={2}
              borderBottom="1px solid"
              borderColor="brand.btnBgColor"
            >
              <Image
                src={logo}
                alt="logo"
                width="80px"
                height="80px"
                objectFit="contain"
              />
              <CloseButton
                size="sm"
                color="brand.textColor"
                onClick={() => setOpen(false)}
              />
            </Flex>

            {/* Body */}
            <Flex
              gap={5}
              flexDirection="column"
              alignItems="flex-start"
              cursor="pointer"
              fontSize="16px"
              fontWeight={500}
              px={6}
              pt={5}
            >
              {routesData.map(({ label, id }) => (
                <Text
                  key={id}
                  _hover={{ color: "brand.btnBgColor" }}
                  onClick={() => handleClick(id)}
                >
                  {label}
                </Text>
              ))}
              <Separator borderBottomWidth="1px" borderColor="brand.btnBgColor" />
            </Flex>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileNavBar;
