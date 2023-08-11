import React from 'react'
import imgLogo from '../img/core-img/logo.png'
import { Search } from './Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import SearchFilter from './SearchFilter'

const Header = () => {
    return (
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
                                            {/* <PersonOutlineIcon
                                                fontSize="large"
                                                style={{ display: 'flex' }}
                                            /> */}
                                            {/* <PersonOutlineIcon
                                                fontSize="large"
                                                style={{ display: 'flex' }}
                                            /> */}
                                            <a href="/login">Login</a>
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
    )
}

export default Header
