import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { removePlan } from '../../../redux/apiThunk/planThunk'
import { useDispatch } from 'react-redux'

const Food = ({ id, foodId, name, image, time, ingredient, handleDelete }) => {
    const dispatch = useDispatch()
    const deletePlanMeal = () => {
        dispatch(removePlan({ id: id }))
        handleDelete()
    }
    return (
        <div className="product">
            <div>
                <img src={image} alt={name} width="150" height="150" />
            </div>
            <div className="product-detail">
                <div>
                    <Link href={`/recipe-detail/${foodId}`}>
                        <b>{name}</b>
                    </Link>
                </div>
                <div style={{ fontSize: "14px" }}>
                    Cooking: {time} minutes<br />
                    Ingredient: {ingredient} Ingredients
                </div>
            </div>
            <div style={{ alignItems: 'right' }}>
                <Link to={`/update-plan/${id}`}><button>update</button></Link>
                <button onClick={() => deletePlanMeal()}>delete</button>
            </div>
        </div>
    )
}

export default Food
