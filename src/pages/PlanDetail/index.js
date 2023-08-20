import './index.css'
import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Food from './Food'
import { getPlanByDate } from '../../redux/apiThunk/planThunk'
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PlanDetail = () => {
    const { date } = useParams();
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false)
    const formatDate = (date) => {
        const [d, m, y] = date.split("-");
        return m + "/" + d + "/" + y
    }
    useEffect(() => {
        dispatch(getPlanByDate({ date: formatDate(date) }));
    }, [dispatch, date, reload]);

    const planDetail = useSelector((state) => state.plan);
    const dataStatus = useSelector((state) => state.plan.loading)

    const handleDelete = () => {
        setReload(!reload)
    }

    const [show, setShow] = useState(false);

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
            <div style={{ margin: '50px 0' }}>
                <Container maxWidth="md">
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        You have no plan at {date}
                        <Link to="/plan">
                            <button>
                                Plan Meal
                            </button>
                        </Link>
                    </Typography>
                </Container>
            </div>
        )
    } else {
        content = (<div className="container meal-detail">
            <div className="meal">
                <div className="title">
                    <h4>Meal Planner</h4>
                    <div>
                        {/* <button className="add">Add More Recipes</button> */}
                        <Button variant="primary" onClick={handleShow}>
                            Launch demo modal
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
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
                                handleDelete={handleDelete}
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
                                handleDelete={handleDelete}
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
                                handleDelete={handleDelete}
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
