import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { removePlan, updatePlan, getRecipesPlan } from '../../../redux/apiThunk/planThunk'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import toast from 'react-hot-toast';

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
    const getAllRecipes = useSelector((state) => state.plan.recipePlan)

    //show modal update
    const handleClose = () => setShow(false);
    const handleShow = () => {
        dispatch(getRecipesPlan())
        setShow(true);
    }

    //update plan meal
    const handleFormUpdate = async (e) => {
        e.preventDefault()
        console.log(e.target[0].value);
        await Swal.fire({
            title: "Do you want to save the changes?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#285D9A",
            cancelButtonColor: "#e74a3b",
            confirmButtonText: "Yes, save it!",
            background: "white",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await dispatch(updatePlan({ id: id, data: data })).then((result) => {
                    result.payload.status === 1 ? toast.success('Update Success!') : toast.error('Update Failed!')
                    handleReload()
                }).catch((err) => {
                    console.log(err);
                });
            } else {
            }
        });
        handleClose()
        setShow(false)
    }

    //delete plan meal
    const deletePlanMeal = async (e) => {
        e.preventDefault()
        handleClose()
        await Swal.fire({
            title: "Do you want to save the changes?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#285D9A",
            cancelButtonColor: "#e74a3b",
            confirmButtonText: "Yes, save it!",
            background: "white",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await dispatch(removePlan({ id: id })).then((result) => {
                    result.payload.status === 1 ? toast.success('Delete Success!') : toast.error('Delete Failed!')
                    handleReload()
                }).catch((err) => {
                    console.log(err);
                });
            } else {
            }
        });
    }

    return (
        <div className="product">
            <Link className='product-infor' to={`/recipe-detail/${foodId}`}>
                <img src={image} alt={name} />
                <div className="product-detail">
                    <b>{name}</b>
                    <div style={{ fontSize: "15px" }}>
                        Cooking: {time} minutes<br />
                        Ingredient: {ingredient} Ingredients<br />
                        Calo: {calories}g
                    </div>
                </div>
            </Link>

            <div className='product-feature' style={{ alignItems: 'right' }}>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={e => handleFormUpdate(e)}>
                        <Modal.Body>
                            <div class="form-group">
                                <label htmFor="recipe">Recipe</label>
                                <select id="recipe" class="form-control" onChange={(e) => setData({ ...data, recipeId: e.target.value })} required>
                                    <option value="">...</option>
                                    {getAllRecipes?.data?.map((item) => (
                                        <option value={item.recipeId}>{item.recipeName}</option>
                                    ))}
                                </select>
                                <small id="recipeHepl" class="form-text text-muted">Choose recipe you want to add to plan.</small>
                            </div>
                            <div class="form-group">
                                <label htmFor="meal">Meal of date</label>
                                <select id="meal" class="form-control" onChange={(e) => setData({ ...data, mealOfDate: e.target.value })} required>
                                    <option value="">...</option>
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
                <button onClick={(e) => deletePlanMeal(e)}>
                    Delete
                </button>
                <button onClick={handleShow}>
                    Update
                </button>
            </div>
        </div >
    )
}

export default Food
