import React from 'react';
import { Box, Heading, SimpleGrid, Image, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">Our Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text mb={2}>${product.price.toFixed(2)}</Text>
                <Text mb={4}>{product.description}</Text>
                <Button as={Link} to={`/product/${product.id}`} colorScheme="blue" mr={2}>
                  View Details
                </Button>
                <Button onClick={() => addToCart(product)} colorScheme="green">
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default ProductList;