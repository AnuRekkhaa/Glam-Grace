import React from 'react';
import './Grid.css';
import truck from '../assets/truck.png'
import brand from '../assets/brand.png'
import verify from '../assets/verify.png'

const Flex = () => {
  return (
    <div className="flex-container">
      <div className="flex-item">
        <img src={brand} />
        <p>Regal Elegance and  Opulence brands</p>
      </div>
      <div className="flex-item">
        <img src={verify} />
        <p>Versatile and Dermatologist-Approved</p>
      </div>
      <div className="flex-item">
        <img src={truck} />
        <p>Free Shipping across the country</p>
      </div>
    </div>
  );
};

export default Flex;
