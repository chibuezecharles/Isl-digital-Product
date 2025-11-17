import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/bg4.png";
import heroimage1 from "../../assets/images/Phone1.png";
import InputField from "../ui/Input";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PreCustomerApi, {
  GetCustomerMsisdnResponse,
} from "@/api/pre-customer/PreCustomerApi";

const MotionImage = motion(Image);

export default function GetStarted() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("09076407747");
  const slidesPerView = useBreakpointValue({ base: 1, md: 1, lg: 1 });

  const getCustomerByMsisdnQuery = useQuery<GetCustomerMsisdnResponse>({
    queryKey: ["get_devices", phoneNumber],
    queryFn: () => PreCustomerApi.getCustomerByMsisdn({ msisdn: phoneNumber }),
  });
  console.log(getCustomerByMsisdnQuery?.data?.partnerId);

  const contentData = [
    {
      id: 1,
      image: heroimage1,
      heading: "Get Your Dream Device. Pay Later, Stress-free.",
      description:
        "Experience phone ownership made simple. With Intelligra, you can apply for financing, get approved, and receive your new device , all from your phone. Fast approval, doorstep delivery, and full insurance coverage.",
    },
  ];

  return (
    <Box
      pt={["80px", "90px", "100px"]}
      bgRepeat="no-repeat"
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      px={["15px", "20px", "30px", "40px"]}
      position="relative"
      overflow="hidden"
    >
      {/* Carousel Container */}
      <Box overflow="hidden" py={5} pb={20}>
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
                >
                  <Text
                    fontWeight="700"
                    fontSize={["22px", "24px", "28px", "32px"]}
                    color="brand.textColor"
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

                  <div className="w-full block md:flex gap-2">
                    <div className="w-full">
                      <InputField
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        label="Phone Number"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="pt-6">
                      <Button
                        onClick={() => navigate("/onboarding/select-device")}
                        size="lg"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                </Flex>

                {/* Right Image Section with animation */}
                <Flex
                  justifyContent={["center", "center", "flex-end"]}
                  alignItems="center"
                  width={["100%", "100%", "48%"]}
                  mt={["30px", "30px", "0"]}
                >
                  <MotionImage
                    src={content.image}
                    alt="Hero Image"
                    w={["250px", "300px", "400px", "480px"]}
                    h="auto"
                    fit="contain"
                    mx="auto"
                    alignSelf={"center"}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{
                      opacity: 1,
                      y: [0, -10, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.8, ease: "easeInOut" },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }}
                  />
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
