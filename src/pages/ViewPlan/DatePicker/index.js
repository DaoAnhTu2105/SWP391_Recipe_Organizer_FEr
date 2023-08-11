import React, { useState } from 'react'

const WeekDropdown = () => {
    const [selectedWeek, setSelectedWeek] = useState('')
    const [selectedYear, setSelectedYear] = useState('')

    // ... other code ...

    const handleWeekChange = (e) => {
        setSelectedWeek(e.target.value)
    }

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value)
    }

    const getStartDateOfWeek = (week, year) => {
        const date = new Date(year, 0, 1 + (week - 1) * 7)
        const dayOfWeek = date.getDay()
        const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
        return new Date(date.setDate(diff))
    }

    const getEndDateOfWeek = (week, year) => {
        const startDate = getStartDateOfWeek(week, year)
        const endDate = new Date(startDate)
        endDate.setDate(startDate.getDate() + 6)
        return endDate
    }

    const startDate = selectedWeek && selectedYear && getStartDateOfWeek(selectedWeek, selectedYear)
    const endDate = selectedWeek && selectedYear && getEndDateOfWeek(selectedWeek, selectedYear)

    return (
        <div>
            <label>Select Year: </label>
            <input type="number" value={selectedYear} onChange={handleYearChange} />

            <label>Select Week: </label>
            <input type="number" value={selectedWeek} onChange={handleWeekChange} />

            {startDate && endDate && (
                <div>
                    <p>
                        Start Date of Week {selectedWeek}: {startDate.toDateString()}
                    </p>
                    <p>
                        End Date of Week {selectedWeek}: {endDate.toDateString()}
                    </p>
                </div>
            )}
        </div>
    )
}

export default WeekDropdown
