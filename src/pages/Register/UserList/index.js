import React, { Fragment, useState, useEffect } from 'react'
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
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector, useDispatch } from 'react-redux'
import {
    getAllUser,
    changeRole
} from '../../../redux/apiThunk/userThunk'
import CircularProgress from "@mui/material/CircularProgress";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

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
    const stabilizedThis = array?.map((el, index) => [el, index])
    stabilizedThis?.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) {
            return order
        }
        return a[1] - b[1]
    })
    return stabilizedThis?.map((el) => el[0])
}

const headCells = [
    {
        id: 'id',
        label: 'ID',
    },
    {
        id: 'avatar',
        label: 'Avatar',
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
        id: 'role',
        label: 'role',
    },
    {
        id: 'status',
        label: 'Status',
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
    const [reload, setReload] = useState(0)
    const [order, setOrder] = React.useState('asc')
    const [orderBy, setOrderBy] = React.useState('calories')
    const [selected, setSelected] = React.useState([])
    const [page, setPage] = React.useState(0)
    const [dense, setDense] = React.useState(false)
    const [rowsPerPage, setRowsPerPage] = React.useState(20)
    const [update, setUpdate] = useState(false)
    const [id, setId] = useState();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUser())
    }, [update])
    const userList = useSelector((state) => state.user)
    const status = useSelector((state) => state.user.loading)
    // console.log(userList);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = userList?.users.data?.map((n) => n.name)
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
            newSelected = newSelected.concat(selected?.slice(1))
        } else if (selectedIndex === selected?.length - 1) {
            newSelected = newSelected.concat(selected?.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected?.slice(0, selectedIndex),
                selected?.slice(selectedIndex + 1)
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
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userList?.users.data?.length) : 0
    // const visibleRows = React.useMemo(
    //     () =>
    //         stableSort(dataRows, getComparator(order, orderBy))?.slice(
    //             page * rowsPerPage,
    //             page * rowsPerPage + rowsPerPage
    //         ),
    //     [order, orderBy, page, rowsPerPage]
    // )


    // const updateStatusActice = async (id) => {
    //     await dispatch(changeRole({ id: id, role: 'User' }))
    //     console.log(id);
    //     setUpdate(!update)
    // }
    // const updateStatusDeActice = async (id) => {
    //     await dispatch(changeRole({ id: id, role: 'User' }))
    //     console.log(id);
    //     setUpdate(!update)
    // }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClickMenu = (event, id) => {
        setId(id)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const updateRole = async (role) => {
        await dispatch(changeRole({ id: id, role: role }))
        // console.log(id, role);
        setUpdate(!update)
        handleClose()
    }

    let content
    if (status === 'loading') {
        content = (
            <CircularProgress
                sx={{
                    marginTop: '10%',
                    marginLeft: '50%',
                    marginBottom: '10%'
                }}
            />
        )
    } else if (status === 'fail' || (userList.users.data && userList.users.data.length === 0)) {
        content = <div style={{ paddingLeft: "45%%" }}> No data</div>;
    } else {
        const visibleRows = stableSort(userList?.users.data, getComparator(order, orderBy))?.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
        );
        content = (<div className="container user-list">
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected?.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={userList?.users.data?.length}
                            />
                            <TableBody>
                                {visibleRows?.map((row, index) => {
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
                                                {row.userId}
                                            </TableCell>
                                            <TableCell align="left">
                                                <img src={row.avatarName} alt='avatar' />
                                            </TableCell>
                                            <TableCell align="left">{row.fullName}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.roleName}</TableCell>
                                            <TableCell align="left">{row.status}</TableCell>
                                            <TableCell align="left">
                                                <div>
                                                    <Button
                                                        id="demo-customized-button"
                                                        aria-controls={open ? 'demo-customized-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        variant="contained"
                                                        disableElevation
                                                        onClick={(event) => handleClickMenu(event, row.userId)}
                                                        endIcon={<KeyboardArrowDownIcon />}
                                                    >
                                                        Options
                                                    </Button>
                                                    <StyledMenu
                                                        id="demo-customized-menu"
                                                        MenuListProps={{
                                                            'aria-labelledby': 'demo-customized-button',
                                                        }}
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={handleClose}
                                                    >
                                                        <MenuItem onClick={handleClose} disableRipple>
                                                            <ClearSharpIcon />
                                                            DeActivate User
                                                        </MenuItem>
                                                        <Divider sx={{ my: 0.5 }} />
                                                        <MenuItem onClick={() => updateRole('User')} disableRipple>
                                                            <EditIcon />
                                                            Change to User
                                                        </MenuItem>
                                                        <MenuItem onClick={() => updateRole('Cooker')} disableRipple>
                                                            <EditIcon />
                                                            Change to Cooker
                                                        </MenuItem>
                                                    </StyledMenu>
                                                </div>
                                            </TableCell>
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
                        rowsPerPageOptions={[20, 35, 50]}
                        component="div"
                        count={userList?.users.data?.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
        </div>)
    }

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

            {content}
        </Fragment>
    )
}
