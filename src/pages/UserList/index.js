import React, { Fragment } from 'react'
import './index.css'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Paper from '@mui/material/Paper'
import { visuallyHidden } from '@mui/utils'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const data = [
    {
        "userId": "2700e8b6af184fa493f3",
        "username": null,
        "userInfo": null,
        "fullName": null,
        "email": "vuncse151184@fpt.edu.vn",
        "avatarName": null,
        "phoneNum": null,
        "address": null
    },
    {
        "userId": "28cf0dbd03794d7ba580",
        "username": "guest",
        "userInfo": null,
        "fullName": null,
        "email": null,
        "avatarName": null,
        "phoneNum": null,
        "address": null
    },
    {
        "userId": "4d04771382964a2ea2bb",
        "username": null,
        "userInfo": null,
        "fullName": "Dao Anh Tu (K15 HCM)",
        "email": "tudase151149@fpt.edu.vn",
        "avatarName": "https://lh3.googleusercontent.com/a/AAcHTtd0JVTUPG83TCmj3DX9cAop6AJtIJQt2cahlxa0k0SRiHk=s96-c",
        "phoneNum": null,
        "address": null
    },
    {
        "userId": "733e042343a2405d83dd",
        "username": "admin",
        "userInfo": null,
        "fullName": null,
        "email": null,
        "avatarName": null,
        "phoneNum": null,
        "address": null
    },
    {
        "userId": "a3ece52d053445ad9f3c",
        "username": null,
        "userInfo": null,
        "fullName": "Thanh Tùng Nguyễn",
        "email": "tungnt14062001@gmail.com",
        "avatarName": "https://lh3.googleusercontent.com/a/AAcHTteamewrdtg8vW3004yDUGU6HEGkdyA6NnkY4g6zpGzI=s96-c",
        "phoneNum": null,
        "address": null
    },
    {
        "userId": "a94a6e75f3284093a2e5",
        "username": null,
        "userInfo": null,
        "fullName": null,
        "email": "vinhnhse151180@fpt.edu.vn",
        "avatarName": null,
        "phoneNum": null,
        "address": null
    },
    {
        "userId": "e473c8b9c32946af84bc",
        "username": "cooker",
        "userInfo": null,
        "fullName": null,
        "email": null,
        "avatarName": null,
        "phoneNum": null,
        "address": null
    }
]

function createData(id, userName, fullName, email, phone, role) {
    return {
        id,
        userName,
        fullName,
        email,
        phone,
        role,
    }
}

const rows = []

data.map((user) => {
    rows.push(createData(user.userId, user.username, user.fullName, user.email, user.phoneNum, user.role))
    return 1;
})

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) {
            return order
        }
        return a[1] - b[1]
    })
    return stabilizedThis.map((el) => el[0])
}

const headCells = [
    {
        id: 'id',
        label: 'ID',
    },
    {
        id: 'userName',
        label: 'Username',
    },
    {
        id: 'fullName',
        label: 'Full Name',
    },
    {
        id: 'email',
        label: 'Email',
    },
    {
        id: 'phone',
        label: 'Phone',
    },
    {
        id: 'role',
        label: 'role',
    },
    {
        id: '',
        label: '',
    },
]

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property)
    }

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        padding={'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            <b>{headCell.label}</b>
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
}

export default function UserList() {
    const [order, setOrder] = React.useState('asc')
    const [orderBy, setOrderBy] = React.useState('calories')
    const [selected, setSelected] = React.useState([])
    const [page, setPage] = React.useState(0)
    const [dense, setDense] = React.useState(false)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name)
            setSelected(newSelected)
            return
        }
        setSelected([])
    }

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name)
        let newSelected = []

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name)
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            )
        }

        setSelected(newSelected)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const isSelected = (name) => selected.indexOf(name) !== -1

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [order, orderBy, page, rowsPerPage]
    )

    return (
        <Fragment>
            <Container maxWidth="md">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    style={{ color: '#f39c12', marginTop: 20 }}
                    gutterBottom
                >
                    User List
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Manage user accounts
                </Typography>
            </Container>
            <div className="container user-list">
                <Box sx={{ width: '100%' }}>
                    <Paper sx={{ width: '100%', mb: 2 }}>
                        <TableContainer>
                            <Table
                                sx={{ minWidth: 750 }}
                                aria-labelledby="tableTitle"
                                size={dense ? 'small' : 'medium'}
                            >
                                <EnhancedTableHead
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectAllClick={handleSelectAllClick}
                                    onRequestSort={handleRequestSort}
                                    rowCount={rows.length}
                                />
                                <TableBody>
                                    {visibleRows.map((row, index) => {
                                        const isItemSelected = isSelected(row.name)
                                        const labelId = `enhanced-table-checkbox-${index}`
                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.id)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="normal"
                                                >
                                                    {row.id}
                                                </TableCell>
                                                <TableCell align="left">{row.userName}</TableCell>
                                                <TableCell align="left">{row.fullName}</TableCell>
                                                <TableCell align="left">{row.email}</TableCell>
                                                <TableCell align="left">{row.phone}</TableCell>
                                                <TableCell align="left">{row.role}</TableCell>
                                                <TableCell align="left">. . .</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: (dense ? 33 : 53) * emptyRows,
                                            }}
                                        >
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 20, 50]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Box>
            </div>
        </Fragment>
    )
}
