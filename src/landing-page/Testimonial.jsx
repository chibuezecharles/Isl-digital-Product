import React from 'react'
import TestimonialCard from './TestimonialCard'
import { Box, Text } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import testImg1 from "../assets/images/testimonial1.png"
import testImg2 from "../assets/images/testimonial2.png"

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Jenny Wilson",
      rating: "5",
      review: "I got my dream phone with Intelligra and payment has been without hassle",
      imag: testImg1
    },
    {
      id: 2,
      name: "Cody Fisher",
      rating: "5",
      review: "Flexible payment plans and great customer service!",
      imag: testImg2
    },
    {
      id: 3,
      name: "Jacob Jones",
      rating: "5",
      review: "Smooth process and amazing device quality.",
      imag: testImg1
    },
    {
      id: 4,
      name: "Jane Cooper",
      rating: "5",
      review: "I highly recommend Intelligra to anyone!",
      imag: testImg2
    },
  ];

  const marquee = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  `;

  const animation = `${marquee} 30s linear infinite`;

  return (
    <Box py={10} px={[4, 6, 10]} overflow="hidden" bg="transparent" >
      <Text fontSize={['22px', '24px', '28px', '32px']} fontWeight="700" textAlign="center" py={6}>
        What Our Customers Are Saying
      </Text>

      <Box overflow="hidden" whiteSpace="nowrap" _hover={{ animationPlayState: "paused" }}>
        <Box display="inline-flex" gap={6} animation={animation}>
          {testimonialData?.concat(testimonialData)?.map((item, index) => (
            <Box key={index} minW={['280px', '320px', '340px']}>
              <TestimonialCard
                name={item.name}
                rating={item.rating}
                review={item.review}
                imag={item.imag}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
