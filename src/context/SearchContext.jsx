import React, { createContext, useState, useContext, useCallback } from 'react';
import { products } from '../data/products';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const setSearch = useCallback((searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const lowercasedTerm = searchTerm.toLowerCase();
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(lowercasedTerm) ||
      product.description.toLowerCase().includes(lowercasedTerm)
    );

    setSearchResults(filteredProducts);
  }, []);

  return (
    <SearchContext.Provider value={{ searchResults, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};