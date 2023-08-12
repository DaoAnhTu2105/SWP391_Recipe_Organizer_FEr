import React from 'react'
import imgLogo from '../img/core-img/logo.png'
import { Search } from './Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import SearchFilter from './SearchFilter'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'

const Header = () => {
    const [cookies, setCookie] = useCookies(['user'])
    const storedUserData = cookies.user
    return (
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
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <Search />
                <br></br>
                <SearchFilter />
            </header>
        </>
    )
}

export default Header
