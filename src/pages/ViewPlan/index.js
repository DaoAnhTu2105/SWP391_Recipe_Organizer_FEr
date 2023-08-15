import './index.css'
import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MealPlan from './MealPlan'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const ViewPlan = ({ searchQueryList, userRole }) => {
    const [date, setDate] = useState(new Date())

    const getSunday = (currentDate) => {
        currentDate = new Date(currentDate)
        let day = currentDate.getDay(),
            diff = currentDate.getDate() - day // adjust when day is sunday
        return new Date(currentDate.setDate(diff))
    }
    const addDays = (date, days) => {
        var result = new Date(date)
        result.setDate(result.getDate() + days)
        return result
    }

    const formatDate = (date) => {
        const yyyy = date.getFullYear()
        let mm = date.getMonth() + 1 // Months start at 0!
        let dd
        if (date.getDay() === 0) {
            dd = date.getDate() + 1
        } else {
            dd = date.getDate()
        }
        if (dd < 10) dd = '0' + dd
        if (mm < 10) mm = '0' + mm
        return yyyy + '-' + mm + '-' + dd
    }
    const dateRange = [getSunday(date), addDays(getSunday(date), 6)]

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
