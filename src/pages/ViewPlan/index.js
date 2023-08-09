import './index.css'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import WeekScheduleList from "./WeekScheduleList";
import Calendar from 'react-calendar'
import PreviousIcon from '../../components/IconComponent/PreviousIcon'
import NextIcon from '../../components/IconComponent/NextIcon'

const ViewPlan = ({ searchQueryList, userRole }) => {
    const [date, setDate] = useState(new Date())

    const [showScheduleMorning, setShowScheduleMorning] = useState(true)
    const [showScheduleNoon, setShowScheduleNoon] = useState(true)
    const [showScheduleNight, setShowScheduleNight] = useState(true)

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
        <div className="container">
            <div className="calendar-container">
                <Calendar
                    className="week"
                    onChange={setDate}
                    value={dateRange}
                    nextLabel={<NextIcon />}
                    prevLabel={<PreviousIcon />}
                    calendarType={'US'}
                />
            </div>

            {/* <div>
                <button
                    className="button_class"
                    onClick={() => setShowScheduleMorning(!showScheduleMorning)}
                >
                    <b className="day">Morning</b> &nbsp; (8:00 - 12:00)
                </button>
                {showScheduleMorning && (
                    <div
                        className="WeekScheduleList"
                    >
                        <WeekScheduleList
                            session="Morning"
                            scheduleList={schedule}
                        />
                    </div>
                )}
            </div>
            <div>
                <button
                    className="button_class"
                    onClick={() => setShowScheduleNoon(!showScheduleNoon)}
                >
                    <b className="day">Noon</b> &nbsp; (13:00 - 17:00)
                </button>
                {showScheduleNoon && (
                    <div
                        className="WeekScheduleList"
                    >
                        <WeekScheduleList
                            session="Noon"
                            scheduleList={schedule}
                        />
                    </div>
                )}
            </div>
            <div>
                <button
                    className="button_class"
                    onClick={() => setShowScheduleNight(!showScheduleNight)}
                >
                    <b className="day">Night</b> &nbsp; (18:00 - 22:00)
                </button>
                {showScheduleNight && (
                    <div
                        className="WeekScheduleList"
                    >
                        <WeekScheduleList
                            session="Night"
                            scheduleList={schedule}
                        />
                    </div>
                )}
            </div> */}
        </div>
    )
}

export default ViewPlan
