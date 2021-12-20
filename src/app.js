import React from "react";
import Categories from "./components/storefront/categories";
import Products from "./components/storefront/products";
import ActiveCategories from "./components/storefront/current-category";
import Header from "./components/header";
import Footer from "./components/footer";
import { Container } from "@mui/material";
import Simplecart from "./components/cart/simplecart";
function App() {
  return (
    <>
      <Header />
      <Simplecart />
      <Container minHeight="100vh">
        <Categories />
        <ActiveCategories />
        <Products />
      </Container>
      <Footer />
      
    </>
  );
}

export default App;

