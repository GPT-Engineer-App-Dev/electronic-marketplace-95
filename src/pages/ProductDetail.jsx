import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Image, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <Box>Product not found</Box>;
  }

  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl">{product.name}</Heading>
        <HStack spacing={8} align="start">
          <Image src={product.image} alt={product.name} maxWidth="500px" />
          <VStack align="start" spacing={4}>
            <Text fontSize="2xl" fontWeight="bold">${product.price.toFixed(2)}</Text>
            <Text fontSize="lg">{product.description}</Text>
            <Text>Category: {product.category}</Text>
            <Button onClick={() => addToCart(product)} colorScheme="blue" size="lg">
              Add to Cart
            </Button>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProductDetail;