"use client";

import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  Circle,
  Separator,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FileIcon, SmartphoneIcon, CheckIcon, TruckIcon } from "lucide-react";
import phoneImage from "../assets/images/uniqueAdvantage1.png";

// motion wrappers for Chakra v3
const MotionBox = motion.create(chakra.div);
const MotionVStack = motion.create(chakra.div);

const steps = [
  {
    id: 1,
    icon: <FileIcon size={20} color="#F39C12" />,
    title: "Apply Easily",
    description:
      "Start your journey in minutes through the Intelligra web app — simple and secure.",
  },
  {
    id: 2,
    icon: <SmartphoneIcon size={20} color="#F39C12" />,
    title: "Select Your Device",
    description:
      "Choose from a wide range of premium, affordable smartphones tailored to your budget.",
  },
  {
    id: 3,
    icon: <CheckIcon size={20} color="#F39C12" />,
    title: "Get Approved",
    description:
      "Receive quick approval to confirm your financing and lock in your preferred device.",
  },
  {
    id: 4,
    icon: <TruckIcon size={20} color="#F39C12" />,
    title: "Enjoy Delivery",
    description:
      "We'll deliver your new device straight to your doorstep — fully insured and ready to use.",
  },
];

const HowItWorks = () => {
  return (
    <Box bg="brand.lightBlueColor" py={[10, 16]} px={[6, 20]}>
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Text
          textAlign="center"
          fontSize={["22px", "24px", "28px", "32px"]}
          fontWeight="700"
          mb={10}
          color="#0B2545"
        >
          Our Process
        </Text>
      </MotionBox>

      <Flex
        direction={["column", "column", "row"]}
        align="center"
        justify="center"
        gap={5}
        maxW="1200px"
        mx="auto"
      >
        {/* Animate image from left */}
        <MotionBox
          flex="1"
          textAlign="center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src={phoneImage}
            alt="Phones"
            mx="auto"
            maxH={["280px", "340px", "480px"]}
            objectFit="contain"
          />
        </MotionBox>

        {/* Animate steps from right */}
        <MotionVStack
          align="flex-start"
          flex="1"
          maxW="500px"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <Box key={step.id} w="full">
              <Flex gap={4}>
                <Circle
                  size="30px"
                  bg="brand.lightBlueColor"
                  color="brand.textColor"
                  fontWeight="bold"
                  fontSize="sm"
                  flexShrink={0}
                  boxShadow="lg"
                  border="1px solid #B8C5CA"
                >
                  {step.id}
                </Circle>

                <Flex flexDirection="column" gap={3} flex="1">
                  <Box
                    w="40px"
                    h="40px"
                    bg="brand.lightBlueColor"
                    rounded="md"
                    p={2}
                    boxShadow="sm"
                  >
                    {step.icon}
                  </Box>
                  <HStack mb={1}>
                    <Text
                      fontWeight="600"
                      color="brand.textColor"
                      fontSize="md"
                    >
                      {step.title}
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="brand.textColor">
                    {step.description}
                  </Text>
                </Flex>
              </Flex>

              {/* Separator between steps */}
              {index < steps.length - 1 && (
                <Box my={5}>
                  <Separator
                    borderColor="brand.skyblueColor"
                    thickness="1px"
                    borderWidth="2px"
                    borderRadius="full"
                    w="100%"
                  />
                </Box>
              )}
            </Box>
          ))}
        </MotionVStack>
      </Flex>
    </Box>
  );
};

export default HowItWorks;
