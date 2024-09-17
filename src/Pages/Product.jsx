import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Added from '../added/Added';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {id} = useParams();
  console.log('useParams:',useParams());
  console.log('id:',id);

  const product = all_products?.find((e)=> e.id === Number(id))
  console.log('product:',product);

  return (
    <div>
      {product?<Added product= {product}/>: <p>Product not found</p>}
    </div>
  )
}

export default Product
