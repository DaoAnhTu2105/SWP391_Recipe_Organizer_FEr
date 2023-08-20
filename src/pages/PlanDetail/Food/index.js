import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { getDetail, removePlan, updatePlan } from '../../../redux/apiThunk/planThunk'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react'

const formatDate = (date) => {
    const [d, m, y] = date.split("-");
    return m + "/" + d + "/" + y
}

const Food = ({ date, id, foodId, name, image, time, ingredient, fat, calories, carbohydrate, protein, handleReload }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        planDetailId: id,
        planId: "string",
        recipeId: "",
        dateSt: formatDate(date),
        mealOfDate: ""
    })
    const getAllRecipesAPI = useSelector((state) => state.getAllRecipes.getAllRecipes)

    // useEffect(() => {
    //     dispatch(getDetail({ id: id }));
    // }, [show]);

    const deletePlanMeal = async () => {
        await dispatch(removePlan({ id: id }))
        handleReload()
    }
    const handleFormUpdate = async (e) => {
        e.preventDefault()
        await dispatch(updatePlan({ id: id, data: data }))
        handleReload()
        setShow(false)
    }

    // const formatData = (date) => {
    //     const [y, m, d] = date.split("-");
    //     return m + "/" + d + "/" + y
    // }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    Ingredient: {ingredient} Ingredients<br /><br />
                    Calo: {calories}g Fat: {fat}g Carbs: {carbohydrate}g Protein:{protein}g
                </div>
            </div>
            <div style={{ alignItems: 'right' }}>
                <Button variant="primary" onClick={handleShow}>
                    Update
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={e => handleFormUpdate(e)}>
                        <Modal.Body>
                            <div class="form-group">
                                <label htmFor="recipe">Recipe</label>
                                <select id="recipe" class="form-control" onChange={(e) => setData({ ...data, recipeId: e.target.value })} required>
                                    <option>...</option>
                                    {getAllRecipesAPI?.data?.map((item) => (
                                        <option value={item.recipeId}>{item.recipeName}</option>
                                    ))}
                                </select>
                                <small id="recipeHepl" class="form-text text-muted">Choose recipe you want to add to plan.</small>
                            </div>
                            <div class="form-group">
                                <label htmFor="meal">Meal of date</label>
                                <select id="meal" class="form-control" onChange={(e) => setData({ ...data, mealOfDate: e.target.value })} required>
                                    <option>...</option>
                                    <option value="1">BreakFast</option>
                                    <option value="2">Lunch</option>
                                    <option value="3">Dinner</option>
                                </select>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type='submid' >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
                <button onClick={() => deletePlanMeal()}>delete</button>
            </div>
        </div>
    )
}

export default Food
