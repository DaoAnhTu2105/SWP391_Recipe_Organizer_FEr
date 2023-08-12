import * as React from 'react'
import './index.css'
import Food from '../Meal'

export default function MealPlan() {
    return (
        <div className='plan-meal'>
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
                    <div className='meal' style={{ color: "#32a6de" }}>
                        <div><b>BreakFast</b></div>
                        <div><b>6 AM - 8 AM</b></div>
                    </div>
                    <div className='item'>
                        <Food />
                        <Food />
                    </div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                </div>
                <div className='table-body-content'>
                    <div style={{ color: "#e29d1d" }}>
                        <div><b>Lunch</b></div>
                        <div><b>12:30AM - 2PM</b></div>
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
                    <div style={{ color: "#68169c" }}>
                        <div><b>Dinner</b></div>
                        <div><b>6PM - 9PM</b></div>
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
        </div>
    )
}
