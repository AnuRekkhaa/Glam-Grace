import React from 'react';
import './Rate.css'; 
import { Link } from 'react-router-dom';

const Rate = ({ id, name, image, old_price, new_price }) => {

  return (
    <div className='product'>
      <Link to={`/Product/${id}`}><img src={image} alt={name} /></Link>
      <h3>{name}</h3>
      <p className='old'>MRP: Rs.{old_price}</p>
      <p className='new'>Offer Price: Rs.{new_price}</p>
    </div>
  );
};

export default Rate;
