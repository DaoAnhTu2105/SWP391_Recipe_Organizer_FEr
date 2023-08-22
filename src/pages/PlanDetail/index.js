import './index.css'
import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Food from './Food'
import { getPlanByDate, createPlan } from '../../redux/apiThunk/planThunk'
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from 'react'
import { fetchDataAsync } from '../../redux/apiThunk/getAllRecipesThunk'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Swal from "sweetalert2";
import toast, { Toaster } from 'react-hot-toast';

const formatDate = (date) => {
    const [d, m, y] = date.split("-");
    return m + "/" + d + "/" + y
}

const PlanDetail = () => {
    const { date } = useParams();
    const [data, setData] = useState({
        recipeId: "",
        dateSt: formatDate(date),
        mealOfDate: ""
    })
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false)
    const getAllRecipes = useSelector((state) => state.getAllRecipes.getAllRecipes)
    useEffect(() => {
        dispatch(fetchDataAsync())
        dispatch(getPlanByDate({ date: formatDate(date) }))
    }, [dispatch, date, reload]);

    const planDetail = useSelector((state) => state.plan);
    const dataStatus = useSelector((state) => state.plan.loading)

    const handleReload = () => {
        setReload(!reload)
    }

    const handleFormCreate = async (e) => {
        e.preventDefault()
        setShow(false)
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
                await dispatch(createPlan({ data: data })).then((result) => {
                    result.payload.message === "Success" ? toast.success('Create Success!') : toast.error('Create Failed!')
                    setData({
                        ...data, recipeId: "",
                        dateSt: formatDate(date),
                        mealOfDate: ""
                    })
                    setReload(!reload)
                }).catch((err) => {
                    console.log(err);
                });
            } else {
                toast('Nothing Create!')
            }
        });
        setReload(!reload)
    }

    const [show, setShow] = useState(false);
    const formatData = (date) => {
        const [y, m, d] = date.split("-");
        return m + "/" + d + "/" + y
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let content
    if (dataStatus === 'loading') {
        content = (
            <CircularProgress
                sx={{
                    marginTop: '10%',
                    marginLeft: '47%',
                    marginBottom: '10%'
                }}
            />
        )
    } else if (dataStatus === 'succeeded' && (planDetail?.detail.data && planDetail?.detail.data?.ingredient.length === 0)) {
        content = (
            <div className="container meal-detail">
                <div className="meal">
                    {/* <div className="title"> */}
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        You have no plan at {date}
                        <div style={{ marginTop: '10px' }}>
                            <Button variant="primary" onClick={handleShow}>
                                Add More Recipe
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <form onSubmit={e => handleFormCreate(e)}>
                                    <Modal.Body>
                                        <div class="form-group">
                                            <label htmFor="recipe">Recipe</label>
                                            <select id="recipe" class="form-control" placeholder='Recipe' onChange={(e) => setData({ ...data, recipeId: e.target.value })} required>
                                                <option value="">...</option>
                                                {getAllRecipes?.data?.map((item) => (
                                                    <option value={item.recipeId}>{item.recipeName}</option>
                                                ))}
                                            </select>
                                            <small id="recipeHepl" class="form-text text-muted">Choose recipe you want to add to plan.</small>
                                        </div>
                                        {/* <div class="form-group">
                                            <label htmFor="date">Date</label>
                                            <input type="date" class="form-control" id="date" placeholder="Date"
                                                onChange={(e) => setData({ ...data, dateSt: formatData(e.target.value) })} required />
                                        </div> */}
                                        <div class="form-group">
                                            <label htmFor="meal">Meal of date</label>
                                            <select id="meal" class="form-control" placeholder='Meal' onChange={(e) => setData({ ...data, mealOfDate: e.target.value })} required>
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
                        </div>
                    </Typography>
                </div>
            </div>)
    } else {
        content = (<div className="container meal-detail">
            <div className="meal">
                <div className="title">
                    <h4>Meal Planner</h4>
                    <div>
                        <Button variant="primary" onClick={handleShow}>
                            Add More Recipe
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <form onSubmit={e => handleFormCreate(e)}>
                                <Modal.Body>
                                    <div class="form-group">
                                        <label htmFor="recipe">Recipe</label>
                                        <select id="recipe" class="form-control" placeholder='Recipe' onChange={(e) => setData({ ...data, recipeId: e.target.value })} required>
                                            <option value="">...</option>
                                            {getAllRecipes?.data?.map((item) => (
                                                <option value={item.recipeId}>{item.recipeName}</option>
                                            ))}
                                        </select>
                                        <small id="recipeHepl" class="form-text text-muted">Choose recipe you want to add to plan.</small>
                                    </div>
                                    {/* <div class="form-group">
                                        <label htmFor="date">Date</label>
                                        <input type="date" class="form-control" id="date" placeholder="Date"
                                            onChange={(e) => setData({ ...data, dateSt: formatData(e.target.value) })} required />
                                    </div> */}
                                    <div class="form-group">
                                        <label htmFor="meal">Meal of date</label>
                                        <select id="meal" class="form-control" placeholder='Meal' onChange={(e) => setData({ ...data, mealOfDate: e.target.value })} required>
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
                        <button className="clear">Clear All</button>
                    </div>
                </div>
                <div className="title">
                    <h4>Nutrition Facts (per serving)</h4>
                    <div className="nutrition">
                        <div className="nutrition-component">
                            Calories: <b>{planDetail?.detail.data?.calories}g</b>
                        </div>
                        <div className="nutrition-component">
                            Fat: <b>{planDetail?.detail.data?.fat}g</b>
                        </div>
                        <div className="nutrition-component">
                            Carbs: <b>{planDetail?.detail.data?.carbs}g</b>
                        </div>
                        <div className="nutrition-component">
                            Protein: <b>{planDetail?.detail.data?.protein}g</b>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <h4>Breakfast</h4>
                    {planDetail?.detail.data?.food.breakfast?.map((food) => (
                        <Fragment>
                            <Food
                                date={date}
                                id={food.planDetailId}
                                foodId={food.recipeId}
                                name={food.recipeName}
                                image={food.photos}
                                time={food.totalTime}
                                ingredient={food.totalIngredient}
                                calories={food.calories}
                                fat={food.fat}
                                carbohydrate={food.carbohydrate}
                                protein={food.protein}
                                handleReload={handleReload}
                            />
                            <br></br>
                        </Fragment>
                    ))}
                </div>
                <div className="title">
                    <h4>Lunch</h4>
                    {planDetail?.detail.data?.food.lunch?.map((food) => (
                        <Fragment>
                            <Food
                                date={date}
                                id={food.planDetailId}
                                foodId={food.recipeId}
                                name={food.recipeName}
                                image={food.photos}
                                time={food.totalTime}
                                ingredient={food.totalIngredient}
                                calories={food.calories}
                                fat={food.fat}
                                carbohydrate={food.carbohydrate}
                                protein={food.protein}
                                handleReload={handleReload}
                            />
                            <br></br>
                        </Fragment>
                    ))}
                </div>
                <div className="title">
                    <h4>Dinner</h4>
                    {planDetail?.detail.data?.food.dinner?.map((food) => (
                        <Fragment>
                            <Food
                                date={date}
                                id={food.planDetailId}
                                foodId={food.recipeId}
                                name={food.recipeName}
                                image={food.photos}
                                time={food.totalTime}
                                ingredient={food.totalIngredient}
                                calories={food.calories}
                                fat={food.fat}
                                carbohydrate={food.carbohydrate}
                                protein={food.protein}
                                handleReload={handleReload}
                            />
                            <br></br>
                        </Fragment>
                    ))}
                </div>
            </div>
            <div className="ingredient">
                <div className="ingredients">
                    <h4>Shopping List</h4>
                    {planDetail?.detail.data?.ingredient?.map((item, index) => (
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="index"
                            />
                            <label className="custom-control-label" htmlFor={index}>
                                {item?.totalQuantity} {item?.ingredientName}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>)
    }

    return (
        <Fragment>
            <Toaster />
            <Container maxWidth="md">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    style={{ color: '#f39c12', marginTop: 20 }}
                    gutterBottom
                >
                    Meal Plan Detail
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    View your meal plan of week
                </Typography>
            </Container>
            {content}
        </Fragment>
    )
}

export default PlanDetail
