import './weekCalendar.css'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import PreviousIcon from '../IconComponent/PreviousIcon'
import NextIcon from '../IconComponent/NextIcon'

const WeekCalendar = () => {
    const [date, setDate] = useState(new Date())
    const onClickWeekNumber = (weekNumber, date, event) => alert(date) //get first day of week

    return (
        <div className="app">
            <div className="calendar-container">
                <Calendar
                    className="week"
                    onChange={setDate}
                    selectRange={true} //select range
                    showNeighboringMonth={false}
                    showWeekNumbers={true}
                    onClickWeekNumber={onClickWeekNumber}
                    nextLabel={<NextIcon />}
                    prevLabel={<PreviousIcon />}
                />
            </div>
            {date.length > 0 ? (
                <p className="text-center">
                    <span className="bold">Start:</span> {date[0].toDateString()}
                    &nbsp;|&nbsp;
                    <span className="bold">End:</span> {date[1].toDateString()}
                </p>
            ) : (
                <p className="text-center">
                    <span className="bold">Default selected date:</span> {date.toDateString()}
                </p>
            )}
        </div>
    )
}

export default WeekCalendar
