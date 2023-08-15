import React from 'react'
import imgLogo from '../../img/core-img/logo.png'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Logout from '@mui/icons-material/Logout'
import { useNavigate, Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const Header = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const storedUserData = cookies.user
    const [anchorEl, setAnchorEl] = React.useState(null)
    const navigate = useNavigate()
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleLogout = () => {
        removeCookie('user')
    }
    return (
        <header className="header-area fixed-top">
            <div className="delicious-main-menu">
                <div className="classy-nav-container breakpoint-off align-items-center">
                    <div className="container ">
                        <nav className="classy-navbar justify-content-between" id="deliciousNav">
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
                                            <Link to="/view-plan">Meal Plan</Link>
                                        </li>
                                        <li>
                                            <Link to="/user-list">User List</Link>
                                        </li>
                                        <li>
                                            {storedUserData ? (
                                                <>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            width: '110px',
                                                        }}
                                                    >
                                                        <Tooltip title="Account settings">
                                                            <IconButton
                                                                onClick={handleClick}
                                                                size="small"
                                                                style={{ outline: 'none' }}
                                                                sx={{ ml: 2 }}
                                                                aria-controls={
                                                                    open
                                                                        ? 'account-menu'
                                                                        : undefined
                                                                }
                                                                aria-haspopup="true"
                                                                aria-expanded={
                                                                    open ? 'true' : undefined
                                                                }
                                                            >
                                                                <Typography
                                                                    variant="h6"
                                                                    sx={{
                                                                        paddingTop: '30px',
                                                                        textTransform: 'uppercase',
                                                                        fontSize: '20px',
                                                                        borderBottom:
                                                                            '3px solid transparent',
                                                                        lineHeight: '1',
                                                                        color: '#474747',
                                                                        fontWeight: '600',
                                                                    }}
                                                                    gutterBottom
                                                                >
                                                                    {' '}
                                                                    My Account{' '}
                                                                    <ArrowDropDownIcon
                                                                        fontSize="small"
                                                                        sx={{ paddingTop: '5px' }}
                                                                    />{' '}
                                                                </Typography>
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
                                                                    transform:
                                                                        'translateY(-50%) rotate(45deg)',
                                                                    zIndex: 0,
                                                                },
                                                            },
                                                        }}
                                                        transformOrigin={{
                                                            horizontal: 'right',
                                                            vertical: 'top',
                                                        }}
                                                        anchorOrigin={{
                                                            horizontal: 'right',
                                                            vertical: 'bottom',
                                                        }}
                                                    >
                                                        <MenuItem onClick={handleClose}>
                                                            <Link
                                                                to="/profile"
                                                                style={{ display: 'flex' }}
                                                            >
                                                                <Avatar />
                                                                <Typography
                                                                    variant="h6"
                                                                    sx={{ fontSize: '20px' }}
                                                                >
                                                                    Profile
                                                                </Typography>
                                                            </Link>
                                                        </MenuItem>
                                                        {/* <MenuItem onClick={handleClose}>
                                                            <Avatar /> My account
                                                        </MenuItem> */}
                                                        <Divider />
                                                        <MenuItem onClick={handleClose}>
                                                            <Link
                                                                to={'/create-recipe'}
                                                                style={{
                                                                    alignContent: 'center',
                                                                    textDecoration: 'none',
                                                                    color: 'inherit',
                                                                    display: 'flex',
                                                                }}
                                                            >
                                                                <ListItemIcon>
                                                                    <AddCircleOutlineIcon fontSize="small" />
                                                                </ListItemIcon>
                                                                <Typography
                                                                    variant="h6"
                                                                    fontSize={20}
                                                                >
                                                                    Add recipe
                                                                </Typography>
                                                            </Link>
                                                        </MenuItem>
                                                        <MenuItem onClick={handleClose}>
                                                            <Link
                                                                to="/favorite-recipe"
                                                                style={{ display: 'flex' }}
                                                            >
                                                                <ListItemIcon>
                                                                    <FavoriteBorderIcon fontSize="small" />
                                                                </ListItemIcon>
                                                                <Typography
                                                                    variant="h6"
                                                                    fontSize={20}
                                                                >
                                                                    {' '}
                                                                    Favorite Recipe
                                                                </Typography>
                                                            </Link>
                                                        </MenuItem>
                                                        <MenuItem onClick={handleLogout}>
                                                            <ListItemIcon>
                                                                <a
                                                                    style={{ display: 'flex' }}
                                                                    href="/login"
                                                                >
                                                                    <Logout fontSize="small" />
                                                                    <Typography
                                                                        variant="h6"
                                                                        sx={{
                                                                            paddingLeft: '10px',
                                                                            fontSize: '20px',
                                                                        }}
                                                                    >
                                                                        Logout
                                                                    </Typography>
                                                                </a>
                                                            </ListItemIcon>
                                                        </MenuItem>
                                                    </Menu>
                                                </>
                                            ) : (
                                                <a href="/login">Login</a>
                                            )}
                                        </li>
                                    </ul>
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
