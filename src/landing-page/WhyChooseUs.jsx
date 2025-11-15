"use client";

import { Box, Flex, VStack, Image, Text, Icon, chakra } from "@chakra-ui/react";
import { FiPhoneCall, FiRefreshCw, FiTruck } from "react-icons/fi";
import { MdScreenShare } from "react-icons/md";
import { motion } from "framer-motion";
import phoneImg from "../assets/images/uniqueAdvantage2.png"; // your image path

// Motion wrappers (Framer Motion + Chakra v3)
const MotionBox = motion.create(chakra.div);
const MotionVStack = motion.create(chakra.div);
const MotionImage = motion.create(chakra.img);

const WhyChooseUs = () => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      py={[10, 16]}
      px={[6, 6, 12, 20]}
      bg="brand.lightBlueColor"
    >
      {/* Section Title */}
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Text
          fontSize={["22px", "24px", "28px", "32px"]}
          fontWeight="700"
          mb={[10, 16]}
          color="brand.textColor"
          textAlign="center"
        >
          Our Unique Advantage
        </Text>
      </MotionBox>

      <Flex
        justify="center"
        align="center"
        gap={[3, 3, 0]}
        flexDir={["column", "column", "row"]}
        position="relative"
      >
        {/* Left side (slide in from left) */}
        <MotionVStack
          align={"flex-end"}
          textAlign={["left", "left", "right"]}
          flex="1"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Flex
            gap={3}
            flexDirection={["row-reverse", "row", "row"]}
            alignItems={"center"}
            mb={10}
          >
            <Text
              fontSize={["14px", "15px", "16px"]}
              color="brand.textColor"
              maxW="250px"
            >
              Replacement when device gets stolen
            </Text>
            <Flex
              w="50px"
              h="50px"
              minW="50px"
              minH="50px"
              flexShrink={0}
              bg="brand.btnBgColor"
              color="white"
              rounded="full"
              justify="center"
              align="center"
            >
              <Icon as={FiRefreshCw} boxSize="22px" />
            </Flex>
          </Flex>

          <Flex
            gap={3}
            flexDirection={["row-reverse", "row", "row"]}
            alignItems={"center"}
          >
            <Text fontSize="16px" color="brand.textColor" maxW="250px">
              Get data and airtime bonuses.
            </Text>
            <Flex
              w="50px"
              h="50px"
              minW="50px"
              minH="50px"
              flexShrink={0}
              bg="brand.btnBgColor"
              color="white"
              rounded="full"
              justify="center"
              align="center"
            >
              <Icon as={FiPhoneCall} boxSize="22px" />
            </Flex>
          </Flex>
        </MotionVStack>

        {/* Center image (fade up) */}
        <MotionImage
          src={phoneImg}
          alt="Smartphone"
          maxW={["250px", "300px", "400px"]}
          objectFit="contain"
          filter="drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1))"
          flexShrink={0}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        />

        {/* Right side (slide in from right) */}
        <MotionVStack
          align="flex-start"
          textAlign="left"
          flex="1"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Flex gap={3} alignItems={"center"}  mb={10}>
            <Flex
              w="50px"
              h="50px"
              minW="50px"
              minH="50px"
              flexShrink={0}
              bg="brand.btnBgColor"
              color="white"
              rounded="full"
              justify="center"
              align="center"
            >
              <Icon as={FiTruck} boxSize="22px" />
            </Flex>
            <Text fontSize="16px" color="brand.textColor" maxW="250px">
              Nationwide delivery.
            </Text>
          </Flex>

          <Flex gap={3} alignItems={"center"}>
            <Flex
              w="50px"
              h="50px"
              minW="50px"
              minH="50px"
              flexShrink={0}
              bg="brand.btnBgColor"
              color="white"
              rounded="full"
              justify="center"
              align="center"
            >
              <Icon as={MdScreenShare} boxSize="22px" />
            </Flex>
            <Text fontSize="16px" color="brand.textColor" maxW="250px">
              One time screen replacement when broken
            </Text>
          </Flex>
        </MotionVStack>
      </Flex>
    </Flex>
  );
};

export default WhyChooseUs;
