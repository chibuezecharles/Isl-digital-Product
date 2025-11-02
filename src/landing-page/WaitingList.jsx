"use client";

import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const WaitingList = () => {
  const validationSchema = Yup.object().shape({
    contact: Yup.string()
      .required("Please enter your email or phone number")
      .test(
        "emailOrPhone",
        "Enter a valid email or phone number",
        (value) =>
          /^\S+@\S+\.\S+$/.test(value) || /^[0-9]{10,15}$/.test(value)
      ),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("values", values);
    toaster.create({
      title: "Success!",
      description: "You've joined the waiting list successfully.",
      type: "success",
      duration: 3000,
      placement: "top-end",
    });
    resetForm();
  };

  return (
    <Box
      py={[14, 20]}
      px={[6, 10, 20]}
      textAlign="center"
      bg="brand.lightBlueColor"
    >
      <Text
        fontSize={["22px", "26px", "30px"]}
        fontWeight="700"
        color="brand.textColor"
        mb={3}
      >
        Join Our Waiting List
      </Text>

      <Text
        color="brand.textColor"
        maxW="600px"
        mx="auto"
        mb={8}
        fontSize={["14px", "15px", "16px"]}
      >
        Be the first to know when we launch new products and exclusive offers.
        Enter your phone number or email to join the list.
      </Text>

      <Formik
        initialValues={{ contact: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (
          <Form>
            <Flex
              justify="center"
              flexDir={["column", "column", "row"]}
              align={["stretch", "stretch", "flex-start"]}
              gap={[4, 4, 3]}
              maxW="600px"
              mx="auto"
            >
              {/* Input wrapper with fixed height to prevent shifting */}
              <Box w="full" position="relative" minH="90px">
                <Input
                  name="contact"
                  value={values.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email or phone number"
                  bg="white"
                  color="brand.textColor"
                  border="1px solid"
                  borderColor={
                    errors.contact && touched.contact
                      ? "red.500"
                      : "brand.btnBgColor"
                  }
                  px={4}
                  _focus={{
                    borderColor:
                      errors.contact && touched.contact
                        ? "red.500"
                        : "brand.btnBgColor",
                    boxShadow:
                      errors.contact && touched.contact
                        ? "0 0 0 1px rgba(229, 62, 62, 0.15)"
                        : "0 0 0 1px var(--chakra-colors-brand-btnBgColor)",
                  }}
                  w={["100%", "100%", "400px"]}
                  py={6}
                  rounded="full"
                  aria-invalid={
                    errors.contact && touched.contact ? "true" : "false"
                  }
                  aria-describedby={
                    errors.contact && touched.contact
                      ? "contact-error"
                      : undefined
                  }
                />

                {/* Error message shown under the input */}
                {errors.contact && touched.contact && (
                  <Text
                    id="contact-error"
                    mt={2}
                    color="red.500"
                    fontSize="sm"
                    textAlign="center"
                    position={["static", "static", "absolute"]}
                    left="0"
                    right="0"
                  >
                    {errors.contact}
                  </Text>
                )}
              </Box>

              <Button
                type="submit"
                bg="brand.btnBgColor"
                color="white"
                px={8}
                py={6}
                rounded="full"
                fontWeight="600"
                _hover={{ bg: "brand.btnHoverColor" }}
                isLoading={isSubmitting}
                alignSelf={["center", "center", "flex-start"]}
              >
                Join Now
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default WaitingList;
