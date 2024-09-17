import React, { useContext } from 'react';
import './Added.css';
import arrow from '../assets/arrow.png';
import { ShopContext } from '../Context/ShopContext';

const Added = ( {product} ) => {

  const {addToCart} =useContext(ShopContext);

  return (
    <div className='add'>
      <div className='breadcrumbs'>
        <span>HOME <img src={arrow} alt="arrow" /> </span>
        <span>SHOP <img src={arrow} alt="arrow" /> </span>
        <span>{product?.category} <img src={arrow} alt="arrow" /> </span>
        <span>{product?.name}</span>
      </div>
      <div className='product-details'>
        <img src={product?.image} alt={product?.name} className='product-image' />
        <div className='product-info'>
          <h1>{product?.name}</h1>
          <p className='description'>
            We have a lot of cosmetics, Makeup Items, Skin care, Body care, Hair Care items. We also have a number of perfume fragrances with lots of International brands. <br /> We also provide more offers in all items and categories.
          </p>
          <p className='old-price'>MRP: Rs.{product?.old_price}</p>
          <p className='new-price'>Offer Price: Rs.{product?.new_price}</p>
          <button onClick={()=>{addToCart(product?.id)}}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Added;
