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
                    <Food
                        image="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg"
                        name="Bun bo"
                        time="20"
                        ingredient="10"
                    />
                </div>
                <div className='ingredient'>

                </div>
            </div>
        </Fragment>
    )
}

export default MealDetail