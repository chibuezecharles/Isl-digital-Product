import React from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import logo from "../assets/images/isl-logo.png";
import tiktok from "../assets/icons/icons-tik-tok.png";
import instagramIcon from "../assets/icons/icons-instagram.png";
import facebook from "../assets/icons/icons-facebook.png";
import whatsappIcon from "../assets/icons/icons-whatsapp.png";
import { Link } from "react-router-dom";

const Footer = ({
  phone = "2347030572635",
  message = "Hello! I would like to get in touch with you.",
}) => {
  const currentYear = new Date().getFullYear();
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={["center", "center", "flex-start"]}
      alignItems={["center", "center", "flex-start"]}
      gap={6}
      px={10}
      pt={12}
      bgColor={"brand.textColor"}
    >
      <Grid
        width={"100%"}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={8}
        color={"brand.whiteColor"}
        alignItems={"center"}
        py={6}
      >
        <GridItem>
          <Flex
            flexDirection={"column"}
            gap={5}
            fontSize={["14px", "14px", "16px", "18px"]}
            justifyContent={["center", "center", "flex-start"]}
            alignItems={["center", "center", "flex-start"]}
          >
            <Image src={logo} alt="logo" height={"100px"} />
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            flexDirection={"column"}
            gap={5}
            fontSize={["14px", "14px", "16px", "18px"]}
            justifyContent={["center", "center", "flex-start"]}
            alignItems={["center", "center", "flex-start"]}
          >
            <Link to={"https://intelligra.io/about.php"} target="_blank">
              {" "}
              About Intelligra
            </Link>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            flexDirection={"column"}
            gap={5}
            fontSize={["14px", "14px", "16px", "18px"]}
            justifyContent={["center", "center", "flex-start"]}
            alignItems={["center", "center", "flex-start"]}
          >
            <Link to={"#"}> Privacy Policy </Link>
            <Link to={"#"}> Terms & Conditions</Link>
            <Link to={"#"}> Support</Link>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            gap={4}
            cursor={"pointer"}
            justifyContent={["center", "center", "flex-start"]}
            alignItems={["center", "center", "flex-start"]}
            _hover={{ transform: "scale(1.1)" }}
          >
            <img
              src={whatsappIcon}
              alt="whatsapp"
              width={"32px"}
              height={"32px"}
              onClick={handleClick}
            />
            <Link
              to={"https://www.facebook.com/profile.php?id=61583980161966"}
              target="_blank"
            >
              <img
                src={facebook}
                alt="linkedin"
                width={"32px"}
                height={"32px"}
              />
            </Link>
            <Link
              to={"https://www.instagram.com/devicexpress_/"}
              target="_blank"
            >
              <img
                src={instagramIcon}
                alt="instagram"
                width={"32px"}
                height={"32px"}
              />
            </Link>
            <Link to={"https://www.tiktok.com/@devicexpress_"} target="_blank">
              <img src={tiktok} alt="email" width={"32px"} height={"32px"} />
            </Link>
          </Flex>
        </GridItem>
      </Grid>
      <Box
        width={"100%"}
        mt={5}
        mb={10}
        fontSize={["14px", "14px", "16px", "18px"]}
        textAlign={"center"}
        color={"brand.whiteColor"}
      >
        <Text>
          © Copyright {currentYear}, All Rights Reserved by Intelligra
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
