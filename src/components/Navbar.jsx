import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md">
          <Link to="/">ElectroShop</Link>
        </Heading>
        <Spacer />
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