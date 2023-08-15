import './index.css'
import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MealPlan from './MealPlan'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const ViewPlan = ({ searchQueryList, userRole }) => {

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(
    //         getScheduleByWeek({
    //             date: formatDate(date),
    //             keywordArray: searchQueryList,
    //         })
    //     );
    // }, [date, searchQueryList]);
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
                    Meal Plan
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    View your meal plan of week
                </Typography>
            </Container>
            <div className="container">
                <MealPlan />
            </div>
        </Fragment>
    )
}

export default ViewPlan
