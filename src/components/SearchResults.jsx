import React from 'react';
import { Box, VStack, Text, Image, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

const SearchResults = () => {
  const { searchResults } = useSearch();

  if (searchResults.length === 0) {
    return null;
  }

  return (
    <Box position="absolute" top="60px" left="0" right="0" bg="white" boxShadow="md" zIndex="1000" p={4}>
      <Heading size="md" mb={4}>Search Results</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {searchResults.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} objectFit="cover" h="200px" w="100%" />
            <VStack p={2} align="start">
              <Heading as="h3" size="sm">{product.name}</Heading>
              <Text fontSize="sm" noOfLines={2}>{product.description}</Text>
              <Text fontWeight="bold">${product.price.toFixed(2)}</Text>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SearchResults;