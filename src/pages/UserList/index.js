import React, { useState } from 'react';
import './index.css'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import { Menu, MenuItem } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Swal from "sweetalert2";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DeleteIcon from "@mui/icons-material/Delete";

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(id, userName, fullName, email, phone, role) {
    return { id, userName, fullName, email, phone, role };
}

const rows = [
    createData('01', 'frozenas12', 'Frozen yoghurt', 'thuoasd@gmail.com', '0124212424', 'Client'),
    createData('02', 'frozenas12', 'Yvonne Holt', 'cursus.purus.nullam@aol.couk', '0124212424', 'Client'),
    createData('03', 'frozenas12', 'Frozen yoghurt', 'aliquet.metus@outlook.edu', '0124212424', 'Cooker'),
    createData('04', 'frozenas12', 'Mannix Mcdowell', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('05', 'frozenas12', 'Devin Barry', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('06', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData('07', 'frozenas12', 'Mannix Mcdowell', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('08', 'frozenas12', 'Devin Barry', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('09', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData('10', 'frozenas12', 'Mannix Mcdowell', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('11', 'frozenas12', 'Devin Barry', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('12', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData('13', 'frozenas12', 'Mannix Mcdowell', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('14', 'frozenas12', 'Devin Barry', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('15', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData('16', 'frozenas12', 'Mannix Mcdowell', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('17', 'frozenas12', 'Devin Barry', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('18', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData('19', 'frozenas12', 'Mannix Mcdowell', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('20', 'frozenas12', 'Devin Barry', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('21', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData('22', 'frozenas12', 'Mannix Mcdowell', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('23', 'frozenas12', 'Devin Barry', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('24', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
    createData('25', 'frozenas12', 'Mannix Mcdowell', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('26', 'frozenas12', 'Devin Barry', 'orci.phasellus@protonmail.net', '0124212424', 'Cooker'),
    createData('27', 'frozenas12', 'Paki House', 'etiam@google.edu', '0124212424', 'Client'),
];

export default function UserList() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [anchorEl, setAnchorEl] = useState(null);
    const [id, setID] = useState();
    const [open, setOpen] = useState(false);
    const [opens, setOpens] = useState(true);
    const [openDelete, setOpenDelete] = useState(false);
    const handleClickList = () => {
        setOpens(!opens);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleShowMenuOpen = (event, id) => {
        setID(id);
        setAnchorEl(event.currentTarget);
    };

    const handleShowMenuClose = () => {
        setAnchorEl(null);
    };


    const handleOpenDelete = () => {
        setOpenDelete(true);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const changeUserRole = (role) => {
        if (true) {
            // dispatch(changeRoleUsers({ id, typeRole: role }));
            // setChangeRoleUser(!changeRoleUser);
            Swal.fire("Change role successfully !!");
            // await dispatch(
            //     getUserList({
            //         fullName: searchQuery,
            //         field: sortQuery,
            //         sortType: sortOrder,
            //     })
            // );
        }
    };

    return (
        <div className='container user-list'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="center"><b>Username</b></StyledTableCell>
                            <StyledTableCell align="left"><b>Full Name</b></StyledTableCell>
                            <StyledTableCell align="left"><b>Email</b></StyledTableCell>
                            <StyledTableCell align="center"><b>Phone number</b></StyledTableCell>
                            <StyledTableCell align="center"><b>Role</b></StyledTableCell>
                            <StyledTableCell align="center">&nbsp;</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row) => (
                            <TableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.userName}</StyledTableCell>
                                <StyledTableCell align="left">{row.fullName}</StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                <StyledTableCell align="center">{row.phone}</StyledTableCell>
                                <StyledTableCell align="center">{row.role}</StyledTableCell>
                                <StyledTableCell align="center"><div
                                    style={{
                                        cursor: "pointer",
                                    }}
                                    className="moreOption"
                                    onClick={(event) =>
                                        handleShowMenuOpen(
                                            event
                                        )
                                    }
                                >
                                    ...
                                </div>
                                </StyledTableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[10, 20, 50, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <Menu
                id="row-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleShowMenuClose}
                sx={{ borderRadius: 4 }}
            >
                <div className="popup__menu">
                    <div className="popup__text">Manage</div>
                    <hr className="popup__hr" />
                    <MenuItem onClick={handleShowMenuClose}>
                        <List
                            className="user_list"
                            sx={{
                                width: "100%",
                                maxWidth: 360,
                                bgcolor: "background.paper",
                            }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={handleClickList}>
                                {/* <ListItemIcon>
                                    <PersonIcon
                                        className="person_icon"
                                        style={{ color: "#285d9a" }}
                                    />
                                </ListItemIcon> */}
                                <ListItemText
                                    primary="Change Role"
                                    className="list_name"
                                />
                                {opens ? (
                                    <ExpandLess
                                        style={{ color: "#285d9a" }}
                                    />
                                ) : (
                                    <ExpandMore
                                        style={{ color: "#285d9a" }}
                                    />
                                )}
                            </ListItemButton>
                            <Collapse
                                in={opens}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    <ListItemButton>
                                        <ListItemText
                                            onClick={() =>
                                                changeUserRole(
                                                    "Class Admin"
                                                )
                                            }
                                            className="list_name"
                                        >
                                            Class Admin
                                        </ListItemText>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemText
                                            onClick={() =>
                                                changeUserRole("Trainer")
                                            }
                                            className="list_name"
                                        >
                                            Trainer
                                        </ListItemText>{" "}
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemText
                                            onClick={() =>
                                                changeUserRole("Trainee")
                                            }
                                            className="list_name"
                                        >
                                            Trainee
                                        </ListItemText>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </MenuItem>
                    <MenuItem onClick={handleShowMenuClose}>
                        <div className="popup__menu__option">
                            <VisibilityOffIcon
                                style={{ color: "#285d9a" }}
                            />

                            <div
                                className="popup__menu__option__text4"
                                onClick={handleClickOpen}
                            >
                                De-active User
                            </div>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={handleShowMenuClose}>
                        <div className="popup__menu__option">
                            <DeleteIcon style={{ color: "#285d9a" }} />
                            <div
                                className="popup__menu__option__text6"
                                onClick={handleOpenDelete}
                            >
                                Delete User
                            </div>
                        </div>
                    </MenuItem>
                </div>
            </Menu>
        </div>
    );
}
