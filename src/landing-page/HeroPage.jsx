import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Header from "./Header";
import bgImage from "../assets/images/bg4.png";
import heroimage1 from "../assets/images/Phone1.png";
import heroimage2 from "../assets/images/Phone2.png";
import heroimage3 from "../assets/images/Phone3.png";
import heroimage4 from "../assets/images/Phone4.png";
import { useNavigate } from "react-router-dom";

const MotionImage = motion(Image);

const HeroPage = () => {
  const navigate = useNavigate();
  const slidesPerView = useBreakpointValue({ base: 1, md: 1, lg: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const autoplayRef = useRef(null);
  const isHoveringRef = useRef(false);

  const contentData = [
    {
      id: 1,
      image: heroimage1,
      heading: "Get Your Dream Device. Pay Later, Stress-free.",
      description:
        "Experience phone ownership made simple. With Intelligra, you can apply for financing, get approved, and receive your new device, all from your phone. Fast approval, doorstep delivery, and full insurance coverage.",
    },
    {
      id: 2,
      image: heroimage2,
      heading: "Your device is protected from day one.",
      description: "Free screen replacement and theft insurance.",
    },
    {
      id: 3,
      image: heroimage3,
      heading: "Fast, secure, and trackable delivery.",
      description: "Receive your device straight at your doorstep.",
    },
    {
      id: 4,
      image: heroimage4,
      heading: "Receive data and airtime bonuses.",
      description: "Mouth-watering incentives just for you.",
    },
  ];

  // Autoplay handler
  useEffect(() => {
    if (!emblaApi) return;

    autoplayRef.current = setInterval(() => {
      if (!isHoveringRef.current) {
        emblaApi.scrollNext();
      }
    }, 3000);

    return () => clearInterval(autoplayRef.current);
  }, [emblaApi]);

  // Update selected slide index
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <Box
      pt={["80px", "90px", "100px"]}
      bgRepeat="no-repeat"
      bgImage={`linear-gradient(
        rgba(11, 37, 69, 0.75),
        rgba(11, 37, 69, 0.55)
      ), url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      px={["15px", "20px", "30px", "40px"]}
      position="relative"
      overflow="hidden"
      onMouseEnter={() => (isHoveringRef.current = true)}
      onMouseLeave={() => (isHoveringRef.current = false)}
    >
      <Header />

      {/* Carousel Container */}
      <Box ref={emblaRef} overflow="hidden" py={5}>
        <Flex className="embla__container">
          {contentData?.map((content) => (
            <Flex
              key={content.id}
              flex={`0 0 ${100 / (slidesPerView || 1)}%`}
              minW={`${100 / (slidesPerView || 1)}%`}
              flexDirection={["column", "column", "row"]}
              justifyContent="space-between"
              alignItems="center"
              height="100%"
              py={[6, 8]}
              px={[4, 6, 8]}
            >
              {/* Inner wrapper that centers slide content */}
              <Flex
                w="100%"
                maxW="1200px"
                mx="auto"
                px={[4, 6, 8]}
                justify="space-between"
                align="center"
                flexDir={["column", "column", "row"]}
                gap={[3, 0, 0]}
              >
                {/* Left Text Section */}
                <Flex
                  flexDirection="column"
                  justifyContent={["center", "center", "flex-start"]}
                  alignItems={["center", "center", "flex-start"]}
                  gap={5}
                  width={["100%", "100%", "52%"]}
                  textAlign={["center", "center", "left"]}
                  color="brand.whiteColor"
                >
                  <Text
                    fontWeight="700"
                    fontSize={["22px", "24px", "28px", "32px"]}
                  >
                    {content.heading.split(" ").slice(0, 3).join(" ")}{" "}
                    <Box as="span" color="brand.btnBgColor">
                      {content.heading.split(" ").slice(3, 4).join(" ")}
                    </Box>{" "}
                    {content.heading.split(" ").slice(4).join(" ")}
                  </Text>

                  <Text
                    fontWeight="400"
                    fontSize={["16px", "18px", "16px", "18px"]}
                    maxW={["100%", "500px", "600px"]}
                    py={[2, 3, 4]}
                  >
                    {content.description}
                  </Text>

                  {/* Desktop button */}
                  <Button
                    display={["none", "none", "flex"]}
                    width="200px"
                    bgColor="brand.btnBgColor"
                    color="brand.textColor"
                    size="lg"
                    fontWeight={"500"}
                    onClick={() => navigate("/onboarding")}
                  >
                    Start my application
                  </Button>
                </Flex>

                {/* Right Image Section */}
                <Flex
                  justifyContent={["center", "center", "flex-end"]}
                  alignItems="center"
                  width={["100%", "100%", "48%"]}
                  mt={["30px", "30px", "0"]}
                  flexDir="column"
                >
                  <MotionImage
                    src={content.image}
                    alt="Hero Image"
                    w={["250px", "300px", "400px", "450px"]}
                    h="auto"
                    fit="contain"
                    mx="auto"
                    alignSelf="center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{
                      opacity: 1,
                      y: [0, -10, 0],
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      opacity: { duration: 0.8, ease: "easeInOut" },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      scale: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />

                  {/* Mobile button below image */}
                  <Button
                    display={["flex", "flex", "none"]}
                    width="200px"
                    bgColor="brand.btnBgColor"
                    color="brand.textColor"
                    size="lg"
                    fontWeight="500"
                    mt={8}
                    onClick={() => navigate("/onboarding")}
                  >
                    Start my application
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Box>

      {/* Pagination Dots */}
      <Flex
        flexWrap="wrap"
        gap={[3, 2, 2]}
        my={5}
        justifyContent="center"
        alignItems="center"
      >
        {contentData.map((_, index) => (
          <Button
            key={index}
            w="18px"
            h="18px"
            p={0}
            minW="unset"
            borderRadius="full"
            bg={
              selectedIndex === index ? "brand.textColor" : "brand.btnBgColor"
            }
            onClick={() => scrollTo(index)}
            _hover={{ bg: "brand.lightBlueColor" }}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default HeroPage;
