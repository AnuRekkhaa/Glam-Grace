import React from 'react'
import './Items.css'

const Items = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="descript">
        <p>{props.descrip}</p>
      </div>
    </div>
  )
}

export default Items
