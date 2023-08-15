import React, { useState } from 'react'
import './index.css'
import Food from '../Food'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-day-picker/dist/style.css';

const meal = {
    status: 1,
    food: [
        {
            breakfast: [],
            lunch: [],
            dinner: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
        },
        {
            breakfast: [{ food: '', calo: '' }],
            lunch: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
            dinner: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
        },
        {
            breakfast: [{ food: 'Pho', calo: '400' }],
            lunch: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
            dinner: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
        },
        {
            breakfast: [{ food: 'Pho', calo: '400' }],
            lunch: [
                { food: '', calo: '' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
            dinner: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
        },
        {
            breakfast: [{ food: 'Pho', calo: '400' }],
            lunch: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
            dinner: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
        },
        {
            breakfast: [{ food: '', calo: '' }],
            lunch: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
            dinner: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
        },
        {
            breakfast: [{ food: 'Pho', calo: '400' }],
            lunch: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
            dinner: [
                { food: 'Ca kho', calo: '400' },
                { food: 'Thit luoc', calo: '400' },
                { food: 'Ca kho', calo: '400' },
            ],
        },

    ],
}

const day = [0, 1, 2, 3, 4, 5, 6];


export default function MealPlan() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getMonday = (currentDate) => {
        currentDate = new Date(currentDate);
        let day = currentDate.getDay(),
            diff = currentDate.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
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
        let dd;
        if (date.getDay() === 0) {
            dd = date.getDate() + 1;
        } else {
            dd = date.getDate();
        }
        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;
        return dd + "/" + mm + "/" + yyyy;
    };

    // console.log(currentDate);
    console.log(Date(getMonday(currentDate)));

    return (
        <div className="plan-meal">
            {/* <DatePicker selected={currentDate} onChange={(date) => setCurrentDate(date)} /> */}
            <div>
                {currentDate.getMonth() + 1} {currentDate.getFullYear()}
            </div>
            <div className="table-header">
                <div></div>
                {}
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
                    </a>
                </div>
                <div className="table-header-component">
                    Thursday
                    <br></br>
                </div>
                <div className="table-header-component">Friday</div>
                <div className="table-header-component">Saturday</div>
                <div className="table-header-component">Sunday</div>
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
                    {meal.food.map((meal) => (
                        <div className="item">
                            {meal.breakfast.map((food) => {
                                if (food.food.length !== 0) {
                                    return (
                                        <Food
                                            foodName={food.food}
                                            calo={food.calo}
                                            meal='breakfast'
                                        />
                                    )
                                }
                                return null;
                            })}
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
                    {meal.food.map((meal) => (
                        <div className="item">
                            {meal.lunch.map((food) => {
                                if (food.food.length !== 0) {
                                    return (
                                        <Food
                                            foodName={food.food}
                                            calo={food.calo}
                                            meal='lunch'
                                        />
                                    )
                                }
                                return null;
                            })}
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
                    {meal.food.map((meal) => (
                        <div className="item">
                            {meal.dinner.map((food) => {
                                if (food.food.length !== 0) {
                                    return (
                                        <Food
                                            foodName={food.food}
                                            calo={food.calo}
                                        />
                                    )
                                }
                                return null;
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
