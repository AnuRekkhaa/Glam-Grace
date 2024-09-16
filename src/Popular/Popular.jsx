import React from 'react'
import './Popular.css'
import products from '../assets/data'
import Items from '../Items/Items'

const Popular = () => {
  return (
    <div className='popular'>
      <h2>Discover Categories</h2>
      <p>From radiant to bold, find the perfect products for your unique style. <br /> "Where beauty meets artistry—discover your signature look."</p>
    <div className="popular-items">
        {products.map((item,i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              descrip={item.description}
              product={item}
            />
          );
        })}
    </div>
    </div>
  )
}

export default Popular
