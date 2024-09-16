import React from 'react';
import './CSS/Category.css';
import all_products from '../assets/all_products';
import Rate from '../Rate/Rate';

const Category = ({ banner, category }) => {

  const filteredProducts = all_products.filter(product => product.category === category);

  return (
    <div className='category'>
      <img src={banner} alt={`${category} banner`} />
      <h2>{category}</h2>
      <div className="indexSort">
        <p>
          <span>Showing 1-10</span> out of {filteredProducts.length} products
        </p>
      </div>
      <div className='product-list'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Rate
              key={product.id}
              name={product.name}
              image={product.image}
              old_price={product.old_price}
              new_price={product.new_price}
            />
          ))
        ) : (
          <p>No products.</p>
        )}
      </div>
      <div className='loadmore'>
          Load More...
      </div>
    </div>
  );
};

export default Category;
