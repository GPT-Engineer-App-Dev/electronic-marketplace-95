import React from 'react';
import { Box, Heading, Text, SimpleGrid, Image, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 3); // Display first 3 products as featured

  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="xl">Discover the latest in electronics and technology</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {featuredProducts.map((product) => (
              <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                  <Text mb={4}>${product.price.toFixed(2)}</Text>
                  <Button as={Link} to={`/product/${product.id}`} colorScheme="blue">
                    View Details
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box textAlign="center">
          <Button as={Link} to="/products" size="lg" colorScheme="blue">
            View All Products
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Home;