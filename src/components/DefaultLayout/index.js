import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer'
import SearchFilter from '../SearchFilter'
import Search from '../Search/Search'

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
