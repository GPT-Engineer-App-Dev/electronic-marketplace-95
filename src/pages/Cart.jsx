import React from 'react';
import { Box, Heading, VStack, HStack, Text, Button, Image } from "@chakra-ui/react";
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl">Your Cart</Heading>
        {cart.length === 0 ? (
          <Text>Your cart is empty.</Text>
        ) : (
          <>
            {cart.map((item) => (
              <HStack key={item.id} justify="space-between" borderWidth={1} p={4} borderRadius="md">
                <Image src={item.image} alt={item.name} boxSize="100px" objectFit="cover" />
                <VStack align="start">
                  <Heading as="h3" size="md">{item.name}</Heading>
                  <Text>Quantity: {item.quantity}</Text>
                  <Text>Price: ${(item.price * item.quantity).toFixed(2)}</Text>
                </VStack>
                <Button onClick={() => removeFromCart(item.id)} colorScheme="red">Remove</Button>
              </HStack>
            ))}
            <HStack justify="space-between">
              <Text fontSize="xl" fontWeight="bold">Total: ${total.toFixed(2)}</Text>
              <Button onClick={clearCart} colorScheme="red">Clear Cart</Button>
            </HStack>
            <Button colorScheme="green" size="lg">Proceed to Checkout</Button>
          </>
        )}
      </VStack>
    </Box>
  );
};

export default Cart;