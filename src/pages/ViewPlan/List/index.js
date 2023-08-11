import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import WeekDropdown from '../DatePicker'

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

export default function MealPlan() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <WeekDropdown />
                        </TableCell>
                        <TableCell align="right">Monday</TableCell>
                        <TableCell align="right">Tuesday</TableCell>
                        <TableCell align="right">Wednesday</TableCell>
                        <TableCell align="right">Thursday</TableCell>
                        <TableCell align="right">Friday</TableCell>
                        <TableCell align="right">Saturday</TableCell>
                        <TableCell align="right">Sunday</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {meals.map((meal) => (
                        < TableRow
                            key={meal.meal}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{meal.meal}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    )
}
