import * as React from 'react'
import './index.css'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
]

const createMeal = (meal) => {
    return { meal }
}

const meals = [
    createMeal('BreakFast'),
    createMeal('Lunch'),
    createMeal('Dinner')
]

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]

export default function MealPlan() {
    return (
        <div className='container plan-meal'>
            <div className='table-header'>
                <div></div>
                <div className='item'>Monday</div>
                <div className='item'>Tuesday</div>
                <div className='item'>Wednesday</div>
                <div className='item'>Thursday</div>
                <div className='item'>Friday</div>
                <div className='item'>Saturday</div>
                <div className='item'>Sunday</div>
            </div>
            <div className='table-body'>
                <div className='table-body-content'>
                    <div>BreakFast</div>
                    <div className='item'>a<br></br>a<br></br>aa<br></br>a<br></br>a</div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                </div>
                <div className='table-body-content'>
                    <div>Lunch</div>
                    <div className='item'>a</div>
                    <div className='item'>a</div>
                    <div className='item'>a</div>
                    <div className='item'>a</div>
                    <div className='item'>a</div>
                    <div className='item'>a</div>
                    <div className='item'>a</div>
                </div>
                <div className='table-body-content'>
                    <div>Dinner</div>
                    <div className='item'>a</div>
                    <div className='item'>a</div>
                    <div className='item'>a</div>
                    <div className='item'>a</div>
                    <div className='item'>a</div>
                    <div className='item'>a</div>
                    <div className='item'>a</div>
                </div>
            </div>
        </div>
    )
}
