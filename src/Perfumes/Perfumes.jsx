import React from 'react'
import './Perfumes.css'
import Perfume from '../assets/scent'
import Items from '../Items/Items'

const Perfumes = () => {
  return (
    <div className='perfume'>
      <h2>Our New Fragrances</h2>
      <p>Elegance redefined: sophistication in every spray. Awaken your senses with a burst of fresh elegance.</p>
      <div className="scent">
        {Perfume.map((item,i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              product={item}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Perfumes
