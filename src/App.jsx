import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart'; 
import Login from './Pages/Login'; 
import Search from './Pages/Search';
import Footer from './Footer/Footer';
import makeup from './assets/makeup-banner.jpg'
import skin from './assets/skin-banner.png'
import body from './assets/body-banner.jpg'
import hair from './assets/hair-banner.jpg'
import fragrance from './assets/perfume-banner.jpg'
import offers from './assets/offers-banner.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Makeup' element={<Category banner={makeup} category="Makeup" />} />
          <Route path='/Skin' element={<Category banner={skin} Category="Skin" />} />
          <Route path='/Body' element={<Category banner={body} Category="Body" />} />
          <Route path='/Hair' element={<Category banner={hair} Category="Hair" />} />
          <Route path='/Fragrance' element={<Category banner={fragrance} Category="Fragrance" />} />
          <Route path='/Offers' element={<Category banner={offers} Category="Offers" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
