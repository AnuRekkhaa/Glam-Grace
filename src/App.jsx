import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart'; 
import Login from './Pages/login'
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
          <Route path='/Skin' element={<Category banner={skin} category="Skin" />} />
          <Route path='/Body' element={<Category banner={body} category="Body" />} />
          <Route path='/Hair' element={<Category banner={hair} category="Hair" />} />
          <Route path='/Fragrance' element={<Category banner={fragrance} category="Fragrance" />} />
          <Route path='/Offers' element={<Category banner={offers} category="Offers" />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
