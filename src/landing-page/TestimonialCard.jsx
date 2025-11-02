import React from 'react'
import { Avatar, Box, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import starIcon from "../assets/images/star.png"

const TestimonialCard = ({ name, rating, review, imag }) => {
  const starCount = Number(rating);
  const isValidRating = !isNaN(starCount) && starCount > 0;

  return (
    <Box bgColor={'brand.skyblueColor'} borderRadius={'8px'} p={6} width={'360px'} maxHeight={'200px'}>
      
      {isValidRating && (
        <Flex alignItems={'center'} gap={2}>
          {[...Array(starCount)].map((_, index) => (
            <img key={index} src={starIcon} alt="Rating" width="16px" height="16px" />
          ))}
        </Flex>
      )}

      <Text height={'100px'} fontWeight={'600'} color={'brand.whiteColor'} py={3} whiteSpace="normal" wordBreak="break-word" lineHeight="1.5" >
        {review}
      </Text>

      <HStack gap="4" color={'brand.whiteColor'}>
        <Avatar.Root>
          <Avatar.Fallback name={name} />
          <Avatar.Image src={imag} />
        </Avatar.Root>
        <Stack gap="0">
          <Text fontWeight="medium">{name}</Text>
        </Stack>
      </HStack>
    </Box>
  )
}

export default TestimonialCard
