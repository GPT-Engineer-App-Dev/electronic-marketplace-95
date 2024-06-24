import React, { createContext, useState, useContext, useCallback } from 'react';
import { products } from '../data/products';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: { min: 0, max: Infinity },
    brand: []
  });

  const updateFilters = useCallback((newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  }, []);

  const setSearch = useCallback((searchTerm) => {
    if (!searchTerm.trim() && filters.category.length === 0 && filters.brand.length === 0 && filters.priceRange.min === 0 && filters.priceRange.max === Infinity) {
      setSearchResults([]);
      return;
    }

    const lowercasedTerm = searchTerm.toLowerCase();
    const filteredProducts = products.filter(product => {
      const matchesSearch = !searchTerm.trim() || 
        product.name.toLowerCase().includes(lowercasedTerm) ||
        product.description.toLowerCase().includes(lowercasedTerm);
      
      const matchesCategory = filters.category.length === 0 || filters.category.includes(product.category);
      const matchesBrand = filters.brand.length === 0 || filters.brand.includes(product.brand);
      const matchesPrice = product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;

      return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });

    setSearchResults(filteredProducts);
  }, [filters]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearch, filters, updateFilters }}>
      {children}
    </SearchContext.Provider>
  );
};