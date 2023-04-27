import { Box, Link, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';

const HomePage: NextPage = () => {
  return (
    <VStack spacing={6} py={40}>
      <NextLink href="/lexical" passHref={true}>
        <Link color="blue.500">
          <Text fontSize="2xl">lexical</Text>
        </Link>
      </NextLink>
      <NextLink href="/form" passHref={true}>
        <Link color="blue.500">
          <Text fontSize="2xl">form</Text>
        </Link>
      </NextLink>
    </VStack>
  );
};

export default HomePage;
