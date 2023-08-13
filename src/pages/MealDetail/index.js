import './index.css'
import React, { useState, useEffect, Fragment } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Food from './Food'

const MealDetail = () => {
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
            <div className="container meal-detail">
                <div className='meal'>
                    <div className='title'>
                        <h4>
                            Meal Planner
                        </h4>
                        <div>
                            <button className='add'>
                                Add More Recipes
                            </button>
                            <button className='clear'>
                                Clear All
                            </button>
                        </div>
                    </div>
                    <div className='title'>
                        <h4>
                            Nutrition Facts (per serving)
                        </h4>
                        <div className='nutrition'>
                            <div className='nutrition-component'>
                                Calories: <b>409</b>
                            </div>
                            <div className='nutrition-component'>
                                Fat: <b>8g</b>
                            </div>
                            <div className='nutrition-component'>
                                Carbs: <b>73g</b>
                            </div>
                            <div className='nutrition-component'>
                                Protein: <b>11g</b>
                            </div>
                        </div>
                    </div>
                    <div className='title'>
                        <h4>Breakfast</h4>
                        <Food
                            image="https://www.allrecipes.com/thmb/DZ5WtIe2s6rGk-rIEZDkMA6mGj4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7568285-perfect-pancakes-KH-4x3-218e2c39174c4a2293fca0ab752b38a8.jpg"
                            name="Perfect Pancakes"
                            time="120"
                            ingredient="10"
                        />
                    </div>
                    <div className='title'>
                        <h4>Lunch</h4>
                        <Food
                            image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/07/14/0/FNK_AIR-FRYER-FRIED-OREOS_H-f_s4x3.jpg.rend.hgtvcom.616.493.suffix/1594743965661.jpeg"
                            name="Deep-Fried Oreos"
                            time="20"
                            ingredient="10"
                        />
                        <br></br>
                        <Food
                            image="https://pinchofyum.com/wp-content/uploads/Sesame-Noodles-with-Chicken-Square.jpg"
                            name="Sesame Noodles"
                            time="20"
                            ingredient="10"
                        />
                    </div>
                    <div className='title'>
                        <h4>Dinner</h4>
                        <Food
                            image="https://girlscangrill.com/wp-content/uploads/2022/07/turkey-legs-hero.jpg"
                            name="Grilled Turkey Legs"
                            time="20"
                            ingredient="10"
                        />
                    </div>
                </div>
                <div className='ingredient'>

                    <div className="ingredients">
                        <h4>Shopping List</h4>
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                4 Tbsp (57 gr) butter
                            </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck2"
                            />
                            <label className="custom-control-label" htmlFor="customCheck2">
                                2 large eggs
                            </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck3"
                            />
                            <label className="custom-control-label" htmlFor="customCheck3">
                                2 yogurt containers granulated sugar
                            </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck4"
                            />
                            <label className="custom-control-label" htmlFor="customCheck4">
                                1 vanilla or plain yogurt, 170g container
                            </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck5"
                            />
                            <label className="custom-control-label" htmlFor="customCheck5">
                                2 yogurt containers unbleached white flour
                            </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck6"
                            />
                            <label className="custom-control-label" htmlFor="customCheck6">
                                1.5 yogurt containers milk
                            </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck7"
                            />
                            <label className="custom-control-label" htmlFor="customCheck7">
                                1/4 tsp cinnamon
                            </label>
                        </div>

                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck8"
                            />
                            <label className="custom-control-label" htmlFor="customCheck8">
                                1 cup fresh blueberries{' '}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MealDetail