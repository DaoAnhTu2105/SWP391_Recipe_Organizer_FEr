import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer'
import Search from '../Search/Search'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default DefaultLayout
