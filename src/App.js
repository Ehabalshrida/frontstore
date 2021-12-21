import React from 'react'
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import ActiveCategories from './components/activeCategories';
import Simplecart from './components/cart/simplecart';


function App() {
  return (
    <>
      <Header/>
      <Simplecart/>
      <Categories/>

      <ActiveCategories />
      <Products/>
      <Footer/>
    </>
  )
}

export default App



