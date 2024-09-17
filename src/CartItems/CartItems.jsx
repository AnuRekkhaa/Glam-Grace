import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../Context/ShopContext';
import removeicon from '../assets/remove.png';

const CartItems = () => {
  const { all_products, cartItems, removeFromCart } = useContext(ShopContext);

  console.log('All Products:', all_products);
  console.log('Cart Items:', cartItems);

  const subtotal = Object.keys(cartItems).reduce((acc, id) => {
    const product = all_products.find(p => p.id === Number(id));
    if (product) {
      const quantity = Number(cartItems[id]);
      const total = product.new_price * quantity;
      return acc + total;
    }
    return acc;
  }, 0);

  return (
    <div className='cartitem'>
      <h1>CART</h1>
      <h2>Your cart is ready!</h2>
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {Object.keys(cartItems).length > 0 ? (
        Object.keys(cartItems).map((id) => {
          const product = all_products.find(p => p.id === Number(id));
          if (product) {
            const quantity = Number(cartItems[id] || 0);
            const totalPrice = product.new_price * quantity;

            return (
              <div key={product.id} className="format format-main">
                <img src={product.image} alt={product.name} className='carticon-producticon'/>
                <p>{product.name}</p>
                <p>Rs.{product.new_price.toFixed(2)}</p>
                <button className='quantity'>{quantity}</button>
                <p>Rs.{totalPrice.toFixed(2)}</p>
                <img 
                  src={removeicon} 
                  onClick={() => removeFromCart(product.id)} 
                  alt="Remove item"
                  className='remove-icon'
                />
              </div>
            );
          }
          return null;
        })
      ) : (
        <p>Your shopping cart is empty</p>
      )}
      <div className="cartdown">
        <hr />
        <h3>Cart Total</h3>
        <p>Subtotal: Rs. {subtotal.toFixed(2)}</p>
        <p>Shipping: Rs. 50</p>
        <p>Total: Rs. {(subtotal + 50).toFixed(2)}</p>
        <button className='checkout-btn'>Checkout</button>
      </div>
    </div>
  );
};

export default CartItems;
