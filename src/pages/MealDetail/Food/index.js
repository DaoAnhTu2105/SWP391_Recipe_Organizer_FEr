import React, { Fragment } from 'react'
import './index.css'

const Food = ({ image, name, time, ingredient }) => {
  return (
    <div className='product'>
      <div>
        <img src={image} alt={name} width="150" height="150" />
      </div>
      <div className="product-detail">
        <div><b>{name}</b></div>
        <div>{time} minutes  {ingredient} Ingredients</div>
      </div>
    </div>
  )
}

export default Food