import React from 'react'
import './index.css'
import imgLogo from '../../img/core-img/logo.png'
import { Search } from '../Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { useCookies } from 'react-cookie';

const Header = () => {
    const [cookies, setCookie] = useCookies(['user']);
    const storedUserData = cookies.user
    return (
        <>
            <header className="header-area header">
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
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <span>{storedUserData.name}</span>


                                                    </div>

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
                <Search />
            </header>
        </>
    )
}

export default Header
