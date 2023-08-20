import './index.css'
import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPlanByWeek } from "../../../redux/apiThunk/planThunk";
import Food from '../Food'
import NextIcon from '../../../components/IconComponent/NextIcon'
import PreviousIcon from '../../../components/IconComponent/PreviousIcon'
import CircularProgress from "@mui/material/CircularProgress";

const dayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

export default function MealPlan() {
    let month, contentAuth;
    const [currentDate, setCurrentDate] = useState(new Date());
    const dispatch = useDispatch();

    const getMonday = (currentDate) => {
        currentDate = new Date(currentDate);
        let day = currentDate.getDay(),
            diff = currentDate.getDate() - day + (day === 0 ? - 6 : 1); // adjust when day is sunday
        return new Date(currentDate.setDate(diff));
    };
    const addDays = (date, days) => {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };
    const formatDate = (date) => {
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();
        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;
        return mm + "/" + dd + "/" + yyyy;
    };
    const formatDateRouter = (date) => {
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();
        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;
        return dd + "-" + mm + "-" + yyyy;
    };
    const subDays = (date, days) => {
        var result = new Date(date);
        result.setDate(result.getDate() - days);
        return result;
    };
    switch (getMonday(currentDate).getMonth() + 1) {
        case 1:
            month = ("January")
            break;
        case 2:
            month = ('February')
            break;
        case 3:
            month = ('March')
            break;
        case 4:
            month = ('April')
            break;
        case 5:
            month = ('May')
            break;
        case 6:
            month = ('June')
            break;
        case 7:
            month = ('July')
            break;
        case 8:
            month = ("August")
            break;
        case 9:
            month = ('September')
            break;
        case 10:
            month = ('October')
            break;
        case 11:
            month = ('November')
            break;
        default:
            month = ('December')
            break;
    }
    const changeColor = (date) => {
        if (date.match(formatDate(new Date()))) {
            return '#F39C12'
        }
    }

    useEffect(() => {
        dispatch(getPlanByWeek({ date: formatDate(getMonday(currentDate)) }))
    }, [dispatch, currentDate])
    const mealPlan = useSelector((state) => state.plan);
    const dataStatus = useSelector((state) => state.plan.loading);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(mealPlan);
    const content = (
        <div className='container' style={{ margin: '30px 0' }}>
            You must Login to use this feature
            <a href="/login">
                <button>
                    Login Page
                </button>
            </a>
        </div>
    )
    if (dataStatus === 'loading') {
        contentAuth = (
            <CircularProgress
                sx={{
                    marginTop: '10%',
                    marginLeft: '47%',
                    marginBottom: '10%'
                }}
            />
        )
    } else if (dataStatus === 'succeeded' && (mealPlan.plans.data && mealPlan.plans.status !== 1)) {
        contentAuth = (
            <Fragment>
                <div className='date-info'>
                    <div className='date'>
                        <a href="/create-plan"><button>Create Meal Plan</button></a>
                    </div>
                    <div className='button'>
                        <button onClick={() => setCurrentDate(subDays(getMonday(currentDate), 7))}>
                            <PreviousIcon />
                        </button>
                        <button onClick={() => setCurrentDate(new Date())}>
                            Today
                        </button>
                        <button onClick={() => setCurrentDate(addDays(getMonday(currentDate), 7))}>
                            <NextIcon />
                        </button>
                    </div>
                </div>
                <div className='table-header'>
                    <div></div>
                    {dayOfWeek.map((day, index) => (
                        <div className="table-header-component" >
                            {/* <a href='*' onClick={(e) => e.preventDefault()}> */}
                            <div style={{ color: changeColor(formatDate(addDays(getMonday(currentDate), index))) }}>
                                <b>
                                    {day}
                                    <br></br>
                                    {formatDate(addDays(getMonday(currentDate), index))}
                                </b>
                            </div>
                            {/* </a> */}
                        </div>
                    ))}
                </div>
                <div className='table-body'>
                    <div className='table-body-content'>
                        <div className="meal" style={{ color: '#32a6de' }}>
                            <div>
                                <b>BreakFast</b>
                            </div>
                            <div>
                                <b>6AM - 8AM</b>
                            </div>
                        </div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                    </div>
                    <div className='table-body-content'>
                        <div style={{ color: '#e29d1d' }}>
                            <div>
                                <b>Lunch</b>
                            </div>
                            <div>
                                <b>12:30AM - 2PM</b>
                            </div>
                        </div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                    </div>
                    <div className='table-body-content'>
                        <div style={{ color: '#68169c' }}>
                            <div>
                                <b>Dinner</b>
                            </div>
                            <div>
                                <b>6PM - 9PM</b>
                            </div>
                        </div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                    </div>
                </div>
            </Fragment>);
    } else {
        contentAuth = (
            <Fragment>
                <div className='date-info'>
                    <div className='date'>
                        <a href="/create-plan"><button>Create Meal Plan</button></a>
                    </div>
                    <div className='button'>
                        <button onClick={() => setCurrentDate(subDays(getMonday(currentDate), 7))}>
                            <PreviousIcon />
                        </button>
                        <button onClick={() => setCurrentDate(new Date())}>
                            Today
                        </button>
                        <button onClick={() => setCurrentDate(addDays(getMonday(currentDate), 7))}>
                            <NextIcon />
                        </button>
                    </div>
                </div>
                <div className='table-header'>
                    <div></div>
                    {dayOfWeek.map((day, index) => (
                        <div className="table-header-component" >
                            <a href={`/plan-detail/${formatDateRouter(addDays(getMonday(currentDate), index))}`}>
                                <div style={{ color: changeColor(formatDate(addDays(getMonday(currentDate), index))) }}>
                                    {day}
                                    <br></br>
                                    {formatDate(addDays(getMonday(currentDate), index))}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="table-body">
                    <div className="table-body-content">
                        <div className="meal" style={{ color: '#32a6de' }}>
                            <div>
                                <b>BreakFast</b>
                            </div>
                            <div>
                                <b>6AM - 8AM</b>
                            </div>
                        </div>
                        {mealPlan?.plans.data?.food && mealPlan?.plans.data?.food.map((meal) => (
                            <div className="item">
                                {
                                    meal.breakfast.map((food) => {
                                        return (
                                            <Food
                                                id={food.recipeId}
                                                foodName={food.recipeName}
                                                calo={food.recipeCalo}
                                                meal='breakfast'
                                            />
                                        )
                                    })
                                }
                            </div>
                        ))}
                    </div>
                    <div className="table-body-content">
                        <div style={{ color: '#e29d1d' }}>
                            <div>
                                <b>Lunch</b>
                            </div>
                            <div>
                                <b>12:30AM - 2PM</b>
                            </div>
                        </div>
                        {mealPlan?.plans.data?.food && mealPlan?.plans.data?.food.map((meal) => (
                            <div className="item">
                                {
                                    meal.lunch.map((food) => {
                                        return (
                                            <Food
                                                id={food.recipeId}
                                                foodName={food.recipeName}
                                                calo={food.recipeCalo}
                                                meal='lunch'
                                            />
                                        )
                                    })
                                }
                            </div>
                        ))}
                    </div>
                    <div className="table-body-content">
                        <div style={{ color: '#68169c' }}>
                            <div>
                                <b>Dinner</b>
                            </div>
                            <div>
                                <b>6PM - 9PM</b>
                            </div>
                        </div>
                        {mealPlan?.plans.data?.food && mealPlan?.plans.data?.food.map((meal) => (
                            <div className="item" >
                                {
                                    meal.dinner.map((food) => {
                                        return (
                                            <Food
                                                id={food.recipeId}
                                                foodName={food.recipeName}
                                                calo={food.recipeCalo}
                                            />
                                        )
                                    })
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </Fragment>)
    }

    return (
        <div className="plan-meal">
            {user?.role ? (contentAuth) : (content)}
        </div >
    )
}
