import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Added from '../added/added';


const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e)=> e.id === Number(productId))

  return (
    <div>
      <Added product= {product}/>
    </div>
  )
}

export default Product
