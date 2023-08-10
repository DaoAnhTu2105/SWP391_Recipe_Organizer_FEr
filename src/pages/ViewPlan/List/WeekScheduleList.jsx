/* eslint-disable react/prop-types */
import './weekScheduleList.css'
import React from 'react'
import ClassInfoPopup from '../classInfoPopup/ClassInfoPopup'
import { nanoid } from '@reduxjs/toolkit'

export default function WeekScheduleList({ scheduleList, session }) {
    const getSession = (time) => {
        switch (time.slice(0, 5)) {
            case '08:00':
            case '08:30':
            case '09:00':
            case '09:30':
            case '10:00':
            case '10:30':
            case '11:00':
            case '11:30':
            case '12:00':
                return 'Morning'
            case '13:00':
            case '13:30':
            case '14:00':
            case '14:30':
            case '15:00':
            case '15:30':
            case '16:00':
            case '16:30':
            case '17:00':
                return 'Noon'
            case '18:00':
            case '18:30':
            case '19:00':
            case '19:30':
            case '20:00':
            case '20:30':
            case '21:00':
            case '21:30':
            case '22:00':
                return 'Night'
        }
    }

    return (
        <div className="week_schedule" key={nanoid}>
            <div className="week_schedule_list">
                <div className="list_column sunday">
                    {/* {scheduleList.map((classes) => {
                        const check = new Date(classes.date);
                        const getDate = check.getDay();
                        if (
                            getSession(classes.startAt) === session &&
                            getDate === 1 || getDate === 0
                        )
                            return (
                                <div className="dropdown" key={nanoid()}>
                                    <ClassInfoPopup classes={classes} />
                                </div>
                            );
                    })} */}
                </div>
                <div className="list_column monday">
                    {scheduleList.map((classes) => {
                        const check = new Date(classes.date)
                        const getDate = check.getDay()
                        if (
                            (getSession(classes.startAt) === session && getDate === 0) ||
                            (getSession(classes.startAt) === session && getDate === 1)
                        )
                            return (
                                <div className="dropdown" key={nanoid()}>
                                    <ClassInfoPopup classes={classes} />
                                </div>
                            )
                    })}
                </div>
                <div className="list_column tuesday">
                    {scheduleList.map((classes) => {
                        const check = new Date(classes.date)
                        const getDate = check.getDay()
                        if (getSession(classes.startAt) === session && getDate === 2)
                            return (
                                <div className="dropdown" key={nanoid()}>
                                    <ClassInfoPopup classes={classes} />
                                </div>
                            )
                    })}
                </div>
                <div className="list_column wednesday">
                    {scheduleList.map((classes) => {
                        const check = new Date(classes.date)
                        const getDate = check.getDay()
                        if (getSession(classes.startAt) === session && getDate === 3)
                            return (
                                <div className="dropdown" key={nanoid()}>
                                    <ClassInfoPopup classes={classes} />
                                </div>
                            )
                    })}
                </div>
                <div className="list_column thursday">
                    {scheduleList.map((classes) => {
                        const check = new Date(classes.date)
                        const getDate = check.getDay()
                        if (getSession(classes.startAt) === session && getDate === 4)
                            return (
                                <div className="dropdown" key={nanoid()}>
                                    <ClassInfoPopup classes={classes} />
                                </div>
                            )
                    })}
                </div>
                <div className="list_column friday">
                    {scheduleList.map((classes) => {
                        const check = new Date(classes.date)
                        const getDate = check.getDay()
                        if (
                            (getSession(classes.startAt) === session && getDate === 5) ||
                            (getSession(classes.startAt) === session && getDate === 6)
                        )
                            return (
                                <div className="dropdown" key={nanoid()}>
                                    <ClassInfoPopup classes={classes} />
                                </div>
                            )
                    })}
                </div>
                {/* <div className="list_column saturday">
                    {scheduleList.map((classes) => {
                        const check = new Date(classes.date);
                        const getDate = check.getDay();
                        if (
                            getSession(classes.startAt) === session &&
                            getDate === 0
                        )
                            return (
                                <div className="dropdown" key={nanoid()}>
                                    <ClassInfoPopup classes={classes} />
                                </div>
                            );
                    })}
                </div> */}
            </div>
        </div>
    )
}

/* <div className="list_column">
                <div className="dropdown" key={nanoid()}>
                  <ClassInfoPopup classes={classes} />
                  
                </div>
              </div> */
