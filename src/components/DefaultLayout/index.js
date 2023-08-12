import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer'
import SearchFilter from '../SearchFilter'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <br></br>
            <SearchFilter />
            {children}
            <Footer />
        </div>
    )
}

export default DefaultLayout
