import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/1.png';
import cart from '../assets/cart.png';
import login from '../assets/login.png';
import search from '../assets/search.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className="logo">
        <Link to='/'><img src={logo} alt="Logo" /></Link>
      </div>

      <ul className='menu'>
        <li onClick={() => setMenu("Makeup")}>
          <Link style={{ textDecoration: 'none' }} to='/Makeup'>Makeup</Link>
          {menu === "Makeup" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Skin")}>
          <Link style={{ textDecoration: 'none' }} to='/Skin'>Skin</Link>
          {menu === "Skin" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Body")}>
          <Link style={{ textDecoration: 'none' }} to='/Body'>Body</Link>
          {menu === "Body" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Hair")}>
          <Link style={{ textDecoration: 'none' }} to='/Hair'>Hair</Link>
          {menu === "Hair" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Fragrance")}>
          <Link style={{ textDecoration: 'none' }} to='/Fragrance'>Fragrance</Link>
          {menu === "Fragrance" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Offers")}>
          <Link style={{ textDecoration: 'none' }} to='/Offers'>Offers</Link>
          {menu === "Offers" ? <hr /> : <></>}
        </li>
      </ul>

      <div className='search'>
        <Link to='/search'><button><img src={search} alt="Search" /></button></Link>
      </div>

      <div className="cart">
        <Link to='/cart'><img src={cart} alt="Cart" /></Link>
      </div>
      <div className="cart-count">0</div>

      <div className="login">
        <Link to='/login'><button><img src={login} alt="Login" /></button></Link>
      </div>
    </div>
  );
}

export default Navbar;
