import * as React from 'react'
import './index.css'

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
