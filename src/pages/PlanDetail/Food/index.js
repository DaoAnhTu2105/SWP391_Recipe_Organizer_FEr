import React, { Fragment } from 'react'
import './index.css'

const Food = ({ id, foodId, name, image, time, ingredient }) => {
    return (
        <div className="product">
            <div>
                <img src={image} alt={name} width="150" height="150" />
            </div>
            <div className="product-detail">
                <div>
                    <a href={`/recipe-detail/${foodId}`}>
                        <b>{name}</b>
                    </a>
                </div>
                <div>
                    {time} minutes {ingredient} Ingredients
                </div>
            </div>
        </div>
    )
}

export default Food
