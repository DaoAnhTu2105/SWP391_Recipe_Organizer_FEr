import React from 'react'
import imgLogo from '../img/core-img/logo.png'
<<<<<<< HEAD
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate, Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
=======
import { Search } from './Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import SearchFilter from './SearchFilter'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
>>>>>>> 0d835c2e71d5c25fa424a2e47251e204b8c1c9c7


const Header = () => {
<<<<<<< HEAD

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
=======
    const [cookies, setCookie] = useCookies(['user'])
>>>>>>> 0d835c2e71d5c25fa424a2e47251e204b8c1c9c7
    const storedUserData = cookies.user
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        removeCookie('user')
        navigate("/login")
    }
    return (
<<<<<<< HEAD

        <header className="header-area fixed-top">
            <div className="delicious-main-menu">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">
                        <nav className="classy-navbar justify-content-between" id="deliciousNav">
                            <a className="nav-brand" href="/">
                                <img src={imgLogo} alt="" />
                            </a>

                            <div className="classy-menu">
                                <div className="classynav">
                                    <ul>
                                        <li className="active">
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/create-recipe">Create Recipe</a>
                                        </li>
                                        <li>
                                            <a href="/favorite-recipe">Favorite Receipies</a>
                                        </li>
                                        <li>
                                            <a href="/view-plan">Meal Plan</a>
                                        </li>
                                        <li>
                                            <a href="/user-list">User List</a>
                                        </li>
                                        <li>
                                            {storedUserData ? (

                                                <>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Tooltip title="Account settings" >
                                                            <IconButton
                                                                onClick={handleClick}
                                                                size="small"
                                                                style={{ outline: "none" }}
                                                                sx={{ ml: 2 }}
                                                                aria-controls={open ? 'account-menu' : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={open ? 'true' : undefined}
                                                            >
                                                                <Avatar sx={{ width: 32, height: 32 }} src={storedUserData.picture}></Avatar>
                                                            </IconButton>

                                                        </Tooltip>
                                                    </Box>
                                                    <Menu
                                                        anchorEl={anchorEl}
                                                        id="account-menu"
                                                        open={open}
                                                        onClose={handleClose}
                                                        onClick={handleClose}
                                                        PaperProps={{
                                                            elevation: 0,
                                                            sx: {
                                                                overflow: 'visible',
                                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                                mt: 1.5,
                                                                '& .MuiAvatar-root': {
                                                                    width: 32,
                                                                    height: 32,
                                                                    ml: -0.5,
                                                                    mr: 1,
                                                                },
                                                                '&:before': {
                                                                    content: '""',
                                                                    display: 'block',
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    right: 14,
                                                                    width: 10,
                                                                    height: 10,
                                                                    bgcolor: 'background.paper',
                                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                                    zIndex: 0,
                                                                },
                                                            },
                                                        }}
                                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                                    >
                                                        <MenuItem onClick={handleClose}>
                                                            <Avatar /> Profile
                                                        </MenuItem>
                                                        <MenuItem onClick={handleClose}>
                                                            <Avatar /> My account
                                                        </MenuItem>
                                                        <Divider />
                                                        <MenuItem onClick={handleClose} style={{ alignContent: "center" }}>
                                                            <Link to={"/create-recipe"}>
                                                                <ListItemIcon>
                                                                    <PersonAdd fontSize="small" />
                                                                </ListItemIcon>
                                                                <Typography>
                                                                    Add recipe
                                                                </Typography>

                                                            </Link>

                                                        </MenuItem>
                                                        <MenuItem onClick={handleClose}>
                                                            <ListItemIcon>
                                                                <Settings fontSize="small" />
                                                            </ListItemIcon>
                                                            Settings
                                                        </MenuItem>
                                                        <MenuItem onClick={handleLogout}>
                                                            <ListItemIcon>
                                                                <Logout fontSize="small" />
                                                            </ListItemIcon>
                                                            Logout
                                                        </MenuItem>
                                                    </Menu>

                                                </>
                                            ) : (
                                                <a href="/login">Login</a>
                                            )}
                                        </li>
                                    </ul>
=======
        <>
            <header className="header-area fixed-top">
                <div className="delicious-main-menu">
                    <div className="classy-nav-container breakpoint-off">
                        <div className="container">
                            <nav
                                className="classy-navbar justify-content-between"
                                id="deliciousNav"
                            >
                                <Link className="nav-brand" to="/">
                                    <img src={imgLogo} alt="" />
                                </Link>

                                <div className="classy-menu">
                                    <div className="classynav">
                                        <ul>
                                            <li className="active">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/create-recipe">Create Recipe</Link>
                                            </li>
                                            <li>
                                                <Link to="/favorite-recipe">
                                                    Favorite Receipies
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/view-plan">Meal Plan</Link>
                                            </li>
                                            <li>
                                                <Link to="/user-list">User List</Link>
                                            </li>
                                            <li>
                                                {storedUserData ? (
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <span>{storedUserData.name}</span>
                                                    </div>
                                                ) : (
                                                    <Link to="/login">Login</Link>
                                                )}
                                            </li>
                                        </ul>
                                    </div>
>>>>>>> 0d835c2e71d5c25fa424a2e47251e204b8c1c9c7
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            
        </header>

    )
}

export default Header
