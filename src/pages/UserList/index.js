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

const rows = [
    createData('01', 'frozenas12', 'Frozen yoghurt', 'thuoasd@gmail.com', '0124212424', 'Client'),
    createData(
        '02',
        'frozenas12',
        'Yvonne Holt',
        'cursus.purus.nullam@aol.couk',
        '0124212424',
        'Client'
    ),
    createData(
        '03',
        'frozenas12',
        'Frozen yoghurt',
        'aliquet.metus@outlook.edu',
        '0124212424',
        'Cooker'
    ),
    createData(
        '04',
        'frozenas12',
        'Mannix Mcdowell',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData(
        '05',
        'frozenas12',
        'Devin Barry',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData('06', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData(
        '07',
        'frozenas12',
        'Mannix Mcdowell',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData(
        '08',
        'frozenas12',
        'Devin Barry',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData('09', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData(
        '10',
        'frozenas12',
        'Mannix Mcdowell',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData(
        '11',
        'frozenas12',
        'Devin Barry',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData('12', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData(
        '13',
        'frozenas12',
        'Mannix Mcdowell',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData(
        '14',
        'frozenas12',
        'Devin Barry',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData('15', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData(
        '16',
        'frozenas12',
        'Mannix Mcdowell',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData(
        '17',
        'frozenas12',
        'Devin Barry',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData('18', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData(
        '19',
        'frozenas12',
        'Mannix Mcdowell',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData(
        '20',
        'frozenas12',
        'Devin Barry',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData('21', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData(
        '22',
        'frozenas12',
        'Mannix Mcdowell',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData(
        '23',
        'frozenas12',
        'Devin Barry',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData('24', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData(
        '25',
        'frozenas12',
        'Mannix Mcdowell',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData(
        '26',
        'frozenas12',
        'Devin Barry',
        'orci.phasellus@protonmail.net',
        '0124212424',
        'Cooker'
    ),
    createData('27', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
]

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
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        style={{ color: '#f39c12' }}
                    >
                        User List
                    </Typography>
                </Container>
            </Box>
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
