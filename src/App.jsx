import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <SearchProvider>
          <Router>
            <Navbar />
            <SearchResults />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </SearchProvider>
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;