"use client";

import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import useDigitalProduct from "./hooks/useDigitalProduct";

const WaitingList = () => {
  // Email-only validation
  const validationSchema = Yup.object().shape({
    contact: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
  });

  const { waitingListHandler, isLoading } = useDigitalProduct();

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const res = await waitingListHandler({ email: values.contact });
      
      if(res?.status === true){
        toaster.create({
          title: "Success!",
          description: res?.message || "You've joined the waiting list successfully.",
          type: "success",
          duration: 3000,
          placement: "top-end",
        });
      }else{
        toaster.create({
          title: "InFormation!",
          description: res?.message || "failed to join the waiting list.",
          type: "error",
          duration: 3000,
          placement: "top-end",
        });
      }

      resetForm();
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";

      toaster.create({
        title: "Error!",
        description: errorMessage,
        type: "error",
        duration: 3000,
        placement: "top-end",
      });
    } finally {
      setSubmitting(false);
    }
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
        Enter your email to join the list.
      </Text>

      <Formik
        initialValues={{ contact: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, values, isSubmitting }) => (
          <Form>
            <Flex
              justify="center"
              flexDir={["column", "column", "row"]}
              align={["stretch", "stretch", "flex-start"]}
              gap={[4, 4, 3]}
              maxW="600px"
              mx="auto"
            >
              {/* Input wrapper */}
              <Box w="full" position="relative" minH="90px">
                <Input
                  type="email"
                  name="contact"
                  value={values.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email address"
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
                  aria-invalid={errors.contact && touched.contact ? "true" : "false"}
                />

                {/* Error message */}
                {errors.contact && touched.contact && (
                  <Text
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
                isLoading={isLoading} 
                alignSelf={["center", "center", "flex-start"]}
              >
                { isLoading ? "Joining..." : "Join Now"}
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default WaitingList;
