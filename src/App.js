import React from "react";
import "./style/app.scss";
import CategoriesComponent from "./components/storefront/categories";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Products from "./components/storefront/products";
import ActiveCategory from "./components/storefront/current-category";
import Simplecart from "./components/cart/simplecart";
import Details from "./components/products/details";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddressForm from "./components/cart/checkout";
function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Simplecart />
            <CategoriesComponent />
            <ActiveCategory />
            <Products />
          </Route>
          <Route exact path="/cart">
            <AddressForm />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
