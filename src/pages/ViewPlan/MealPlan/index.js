import React, { useState } from 'react'
import './index.css'
import Food from '../Food'
import NextIcon from '../../../components/IconComponent/NextIcon'
import PreviousIcon from '../../../components/IconComponent/PreviousIcon'

const meal = {
    "status": 1,
    "message": "Success",
    "data": {
        "food": [
            {
                "breakfast": [
                    {
                        "planDetailId": "07b173de8cea44358fd5",
                        "mealOfDate": 1,
                        "recipeId": "2baf749109e04231b7ee",
                        "recipeName": "Delicious Omelette",
                        "recipeCalo": 250
                    },
                    {
                        "planDetailId": "86b3eb0da0b14d37bb60",
                        "mealOfDate": 1,
                        "recipeId": "2baf749109e04231b7ee",
                        "recipeName": "Delicious Omelette",
                        "recipeCalo": 250
                    },
                    {
                        "planDetailId": "b6fef38a979b4145be95",
                        "mealOfDate": 1,
                        "recipeId": "2baf749109e04231b7ee",
                        "recipeName": "Delicious Omelette",
                        "recipeCalo": 250
                    }
                ],
                "lunch": [
                    {
                        "planDetailId": "6268126e8ac242f5bf47",
                        "mealOfDate": 1,
                        "recipeId": "2baf749109e04231b7ee",
                        "recipeName": "Delicious Omelette",
                        "recipeCalo": 250
                    },
                    {
                        "planDetailId": "891d0255661648aaa6f5",
                        "mealOfDate": 1,
                        "recipeId": "2baf749109e04231b7ee",
                        "recipeName": "Delicious Omelette",
                        "recipeCalo": 250
                    }
                ],
                "dinner": [
                    {
                        "planDetailId": "1486d6cc2d3644a0886f",
                        "mealOfDate": 1,
                        "recipeId": "2baf749109e04231b7ee",
                        "recipeName": "Delicious Omelette",
                        "recipeCalo": 250
                    },
                    {
                        "planDetailId": "2c8d57d36e5a4a8086a9",
                        "mealOfDate": 1,
                        "recipeId": "2baf749109e04231b7ee",
                        "recipeName": "Delicious Omelette",
                        "recipeCalo": 250
                    },
                    {
                        "planDetailId": "3063939b954f47e1ad8d",
                        "mealOfDate": 1,
                        "recipeId": "2baf749109e04231b7ee",
                        "recipeName": "Delicious Omelette",
                        "recipeCalo": 250
                    },
                    {
                        "planDetailId": "89a05ae2b80845359068",
                        "mealOfDate": 1,
                        "recipeId": "2baf749109e04231b7ee",
                        "recipeName": "Delicious Omelette",
                        "recipeCalo": 250
                    },
                    {
                        "planDetailId": "9d2616fb922b40a18e54",
                        "mealOfDate": 1,
                        "recipeId": "2baf749109e04231b7ee",
                        "recipeName": "Delicious Omelette",
                        "recipeCalo": 250
                    }
                ]
            },
            {
                "breakfast": [],
                "lunch": [],
                "dinner": []
            },
            {
                "breakfast": [],
                "lunch": [],
                "dinner": []
            },
            {
                "breakfast": [],
                "lunch": [],
                "dinner": []
            },
            {
                "breakfast": [],
                "lunch": [],
                "dinner": []
            },
            {
                "breakfast": [
                    {
                        "planDetailId": "1486d6cc2d3644a0886f",
                        "mealOfDate": 1,
                        "recipeId": "2baf749109e04231b7ee",
                        "recipeName": "Delicious Omelette",
                        "recipeCalo": 250
                    },
                    {
                        "planDetailId": "2c8d57d36e5a4a8086a9",
                        "mealOfDate": 1,
                        "recipeId": "2baf749109e04231b7ee",
                        "recipeName": "Delicious Omelette",
                        "recipeCalo": 250
                    },],
                "lunch": [],
                "dinner": []
            },
            {
                "breakfast": [],
                "lunch": [],
                "dinner": []
            }
        ]
    }
}

export default function MealPlan() {
    const [currentDate, setCurrentDate] = useState(new Date());
    // const [month, month = ] = useState("");
    let month;

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
        return dd + "/" + mm + "/" + yyyy;
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

    return (
        <div className="plan-meal">
            <div className='date-info'>
                <div className='date'>
                    <b>{month} {currentDate.getFullYear()}</b>
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
            <div className="table-header">
                <div></div>
                <div className="table-header-component">
                    <a href="/meal-detail">
                        Monday
                        <br></br>
                        {formatDate(getMonday(currentDate))}
                    </a>
                </div>
                <div className="table-header-component">
                    <a href="/meal-detail">
                        Tuesday
                        <br></br>
                        {formatDate(addDays(getMonday(currentDate), 1))}
                    </a>
                </div>
                <div className="table-header-component">
                    <a href="/meal-detail">
                        Wednesday
                        <br></br>
                        {formatDate(addDays(getMonday(currentDate), 2))}
                    </a>
                </div>
                <div className="table-header-component">
                    <a href="/meal-detail">
                        Thursday
                        <br></br>
                        {formatDate(addDays(getMonday(currentDate), 3))}
                    </a>
                </div>
                <div className="table-header-component">
                    <a href="/meal-detail">
                        Friday
                        <br></br>
                        {formatDate(addDays(getMonday(currentDate), 4))}
                    </a>
                </div>
                <div className="table-header-component">
                    <a href="/meal-detail">
                        Saturday
                        <br></br>
                        {formatDate(addDays(getMonday(currentDate), 5))}
                    </a>
                </div>
                <div className="table-header-component">
                    <a href="/meal-detail">
                        Sunday
                        <br></br>
                        {formatDate(addDays(getMonday(currentDate), 6))}
                    </a>
                </div>
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
                    {meal.data.food.map((meal) => (
                        <div className="item">
                            {
                                meal.breakfast.map((food) => {
                                    return (
                                        <Food
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
                    {meal.data.food.map((meal) => (
                        <div className="item">
                            {
                                meal.lunch.map((food) => {
                                    return (
                                        <Food
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
                    {meal.data.food.map((meal) => (
                        <div className="item" >
                            {
                                meal.dinner.map((food) => {
                                    return (
                                        <Food
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
        </div >
    )
}
