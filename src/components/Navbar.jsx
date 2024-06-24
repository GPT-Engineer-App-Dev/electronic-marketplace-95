import { Box, Flex, Heading, Spacer, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useSearch } from "../context/SearchContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearch } = useSearch();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearch(value);
  };

  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md">
          <Link to="/">ElectroShop</Link>
        </Heading>
        <Spacer />
        <InputGroup maxW="300px" mr={4}>
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <InputRightElement>
            <FaSearch />
          </InputRightElement>
        </InputGroup>
        <Box>
          <Button as={Link} to="/" mr={2} variant="ghost">
            Home
          </Button>
          <Button as={Link} to="/products" mr={2} variant="ghost">
            Products
          </Button>
          <Button as={Link} to="/cart" colorScheme="blue" leftIcon={<FaShoppingCart />}>
            Cart
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;