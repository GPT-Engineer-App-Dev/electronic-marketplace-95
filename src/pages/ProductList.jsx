import React from 'react';
import { Box, Heading, SimpleGrid, Image, Text, Button, VStack, HStack, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import ProductFilters from '../components/ProductFilters';

const ProductList = () => {
  const { addToCart } = useCart();
  const { searchResults, filters } = useSearch();

  const filterProducts = (products) => {
    return products.filter(product => {
      const matchesCategory = filters.category.length === 0 || filters.category.includes(product.category);
      const matchesBrand = filters.brand.length === 0 || filters.brand.includes(product.brand);
      const matchesPrice = product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;
      return matchesCategory && matchesBrand && matchesPrice;
    });
  };

  const displayProducts = filterProducts(searchResults.length > 0 ? searchResults : products);

  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>Our Products</Heading>
      <Flex>
        <Box width="250px" mr={8}>
          <ProductFilters />
        </Box>
        <VStack spacing={8} align="stretch" flex={1}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {displayProducts.map((product) => (
              <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                  <Text mb={2}>${product.price.toFixed(2)}</Text>
                  <Text mb={2}>Brand: {product.brand}</Text>
                  <Text mb={4}>{product.description}</Text>
                  <HStack>
                    <Button as={Link} to={`/product/${product.id}`} colorScheme="blue" flex={1}>
                      View Details
                    </Button>
                    <Button onClick={() => addToCart(product)} colorScheme="green" flex={1}>
                      Add to Cart
                    </Button>
                  </HStack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
          {displayProducts.length === 0 && (
            <Text textAlign="center" fontSize="xl">No products found matching your criteria.</Text>
          )}
        </VStack>
      </Flex>
    </Box>
  );
};

export default ProductList;