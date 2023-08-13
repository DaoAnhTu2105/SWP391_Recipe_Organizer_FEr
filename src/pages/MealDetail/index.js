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
                            image="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg"
                            name="Bún bò Huế"
                            time="120"
                            ingredient="10"
                        />
                    </div>
                    <div className='title'>
                        <h4>Lunch</h4>
                        <Food
                            image="https://cdn.tgdd.vn/Files/2020/04/29/1252708/ca-nha-ai-cung-thich-me-voi-mon-canh-moc-thap-cam-sieu-ngon-bo-duong-202004292341431198.jpg"
                            name="Canh sườn mộc rau củ"
                            time="20"
                            ingredient="10"
                        />
                        <br></br>
                        <Food
                            image="https://i-giadinh.vnecdn.net/2022/05/18/Thanh-pham-1-1-8291-1652849613.jpg"
                            name="Chả lá lốt"
                            time="20"
                            ingredient="10"
                        />
                    </div>
                    <div className='title'>
                        <h4>Dinner</h4>
                        <Food
                            image="https://cdn.tgdd.vn/2020/08/CookProduct/ava-1200x676-51.jpg"
                            name="Rau bí xào thịt bò"
                            time="20"
                            ingredient="10"
                        />
                    </div>
                </div>
                <div className='ingredient'>
                    Shopping List
                </div>
            </div>
        </Fragment>
    )
}

export default MealDetail