import React from 'react'
import './index.css'

const Food = ({ foodName, calo, meal }) => {
    let bgColor
    switch (meal) {
        case 'breakfast': {
            bgColor = '#c1e4f5'
            break
        }
        case 'lunch': {
            bgColor = '#f6e1bb'
            break
        }
        default: {
            bgColor = '#d1b9e1'
        }
    }
    return (
        <div className="food-box" style={{ backgroundColor: bgColor }}>
            <div>{foodName}</div>
            <div style={{ color: '#718093' }}>Calories: {calo} kcal</div>
        </div>
    )
}

export default Food
