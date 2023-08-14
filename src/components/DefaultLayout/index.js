import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Search from '../Search/Search'
import SearchFilter from '../SearchFilter'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Search />
            <br></br>
            <SearchFilter />
            {children}
            <Footer />
        </div>
    )
}

export default DefaultLayout
