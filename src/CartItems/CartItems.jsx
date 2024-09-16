import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../Context/ShopContext';
import removeicon from '../assets/remove.png';

const CartItems = () => {
  const { all_products, cartItems, removeFromCart } = useContext(ShopContext);

  const subtotal = Object.keys(cartItems).reduce((acc, productId) => {
    const product = all_products.find(p => p.id === Number(productId));
    return product ? acc + product.new_price * cartItems[productId] : acc;
  }, 0);

  return (
    <div className='cartitem'>
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {Object.keys(cartItems).map((productId) => {
        const product = all_products.find(p => p.id === Number(productId));
        if (product) {
          const quantity = cartItems[productId];
          const totalPrice = product.new_price * quantity;

          return (
            <div key={product.id} className="format format-main">
              <img src={product.image} alt={product.name} className='carticon-producticon'/>
              <p>{product.name}</p>
              <p>Rs.{product.new_price}</p>
              <button className='quantity'>{quantity}</button>
              <p>Rs.{totalPrice}</p>
              <img 
                src={removeicon} 
                onClick={() => removeFromCart(product.id)} 
                alt="Remove item"
                className='remove-icon'
              />
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartdown">
        <h3>Cart Total</h3>
        <p>Subtotal: Rs. {subtotal}</p>
        <p>Shipping: Rs. 50</p>
        <p>Total: Rs. {subtotal + 50}</p>
        <button className='checkout-btn'>Checkout</button>
        <hr />
        {Object.keys(cartItems).length === 0 && <p>Your shopping cart is empty</p>}
      </div>
    </div>
  );
};

export default CartItems;
