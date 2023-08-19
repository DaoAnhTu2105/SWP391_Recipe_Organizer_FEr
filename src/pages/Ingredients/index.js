import React, { Fragment, useState, useEffect } from 'react'
import './index.css'
import { Link } from "react-router-dom";
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
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector, useDispatch } from 'react-redux'
import {
    getAllIngredient,
    updateIngredient,
    removeIngredient
} from '../../redux/apiThunk/ingredientThunk'
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

const headCells = [
    {
        id: 'no',
        label: 'No',
    },
    {
        id: 'id',
        label: 'ID',
    },
    {
        id: 'ingredientName',
        label: 'Ingredient Name',
    },
    {
        id: 'measure',
        label: 'Measure',
    },
    {
        id: '',
        label: '',
    },
]

function EnhancedTableHead(props) {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        padding={'normal'}
                    >
                        <b>{headCell.label}</b>
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
    const [selected, setSelected] = React.useState([])
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [reload, setReload] = useState(false)
    const [id, setId] = useState();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllIngredient({ movePage: page + 1, items: rowsPerPage }))
    }, [dispatch, reload, rowsPerPage, page])
    const ingredientList = useSelector((state) => state.ingredient)
    const status = useSelector((state) => state.ingredient.loading)

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = ingredientList?.ingredients?.data?.map((n) => n.name)
            setSelected(newSelected)
            return
        }
        setSelected([])
    }

    const handleChangePage = (event, newPage) => {
        console.log(newPage);
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClickMenu = (event, id) => {
        setId(id)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteIngredient = () => {
        dispatch(removeIngredient({ id: id }))
        setReload(!reload)
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
    } else if (status === 'fail' || (ingredientList.ingredients.data && ingredientList.ingredients.data.length === 0)) {
        content = <div style={{ paddingLeft: "45%%" }}> No data</div>;
    } else {
        content = (<div className="container user-list">
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                        >
                            <EnhancedTableHead
                                numSelected={selected?.length}
                                onSelectAllClick={handleSelectAllClick}
                                rowCount={ingredientList?.ingredients.data?.length}
                            />
                            <TableBody>
                                {ingredientList?.ingredients.data?.map((row, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            key={row.id}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                padding="normal"
                                            >
                                                {(index + 1) + ingredientList?.ingredients.itemPerPage * (ingredientList?.ingredients.moveToPage - 1)}
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                padding="normal"
                                            >
                                                {row.ingredientId}
                                            </TableCell>
                                            <TableCell align="left">{row.ingredientName}</TableCell>
                                            <TableCell align="left">{row.measure}</TableCell>
                                            <TableCell align="center">
                                                <div>
                                                    <Button
                                                        id="demo-customized-button"
                                                        aria-controls={open ? 'demo-customized-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        variant="contained"
                                                        disableElevation
                                                        onClick={(event) => handleClickMenu(event, row.ingredientId)}
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
                                                        PaperProps={{
                                                            style: {
                                                                boxShadow: 'none',
                                                                border: '1px solid #000'
                                                            }
                                                        }}
                                                    >
                                                        <Link to={`/ingredient-detail/${id}`}>
                                                            <MenuItem disableRipple>
                                                                <EditIcon />
                                                                Edit
                                                            </MenuItem>
                                                        </Link>
                                                        <MenuItem onClick={() => deleteIngredient()} disableRipple>
                                                            <DeleteIcon />
                                                            Delete
                                                        </MenuItem>
                                                    </StyledMenu>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50]}
                        component="div"
                        count={ingredientList.ingredients.totalData}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
        </div >)
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
                    Ingredient List
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Manage Ingredient in database
                </Typography>
            </Container>
            <form className='container form-create'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            {content}
        </Fragment>
    )
}
