import React, { createContext, useState } from "react";
import all_products from '../assets/all_products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let product of all_products) {
    cart[product.id] = 0; 
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems(prev => ({...prev,[itemId]: (prev[itemId] || 0) + 1}));
    console.log(cartItems); 
  }

  const removeFromCart = (itemId) => {
    setCartItems(prev => {
      const updatedQuantity = (prev[itemId] || 0) - 1;
      if (updatedQuantity < 0) {
        return prev; 
      }
      return {
        ...prev,
        [itemId]: updatedQuantity
      };
    });
  }

  const contextValue = { all_products, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
