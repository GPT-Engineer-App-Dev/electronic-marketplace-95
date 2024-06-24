import React from 'react';
import { Box, VStack, Heading, Checkbox, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Text, Button } from "@chakra-ui/react";
import { useSearch } from '../context/SearchContext';
import { products } from '../data/products';

const ProductFilters = () => {
  const { filters, updateFilters } = useSearch();

  const categories = [...new Set(products.map(product => product.category))];
  const brands = [...new Set(products.map(product => product.brand))];

  const handleCategoryChange = (category) => {
    const updatedCategories = filters.category.includes(category)
      ? filters.category.filter(c => c !== category)
      : [...filters.category, category];
    updateFilters({ category: updatedCategories });
  };

  const handleBrandChange = (brand) => {
    const updatedBrands = filters.brand.includes(brand)
      ? filters.brand.filter(b => b !== brand)
      : [...filters.brand, brand];
    updateFilters({ brand: updatedBrands });
  };

  const handlePriceChange = (values) => {
    updateFilters({ priceRange: { min: values[0], max: values[1] } });
  };

  const clearFilters = () => {
    updateFilters({
      category: [],
      priceRange: { min: 0, max: Infinity },
      brand: []
    });
  };

  return (
    <Box width="250px" p={4} borderWidth={1} borderRadius="lg">
      <VStack align="stretch" spacing={6}>
        <Box>
          <Heading size="md" mb={2}>Categories</Heading>
          {categories.map(category => (
            <Checkbox 
              key={category} 
              isChecked={filters.category.includes(category)}
              onChange={() => handleCategoryChange(category)}
            >
              {category}
            </Checkbox>
          ))}
        </Box>

        <Box>
          <Heading size="md" mb={2}>Brands</Heading>
          {brands.map(brand => (
            <Checkbox 
              key={brand} 
              isChecked={filters.brand.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            >
              {brand}
            </Checkbox>
          ))}
        </Box>

        <Box>
          <Heading size="md" mb={2}>Price Range</Heading>
          <RangeSlider 
            aria-label={['min', 'max']} 
            defaultValue={[filters.priceRange.min, filters.priceRange.max]}
            min={0}
            max={2000}
            onChange={handlePriceChange}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Text>
            ${filters.priceRange.min} - ${filters.priceRange.max === Infinity ? '2000+' : filters.priceRange.max}
          </Text>
        </Box>

        <Button onClick={clearFilters}>Clear All Filters</Button>
      </VStack>
    </Box>
  );
};

export default ProductFilters;