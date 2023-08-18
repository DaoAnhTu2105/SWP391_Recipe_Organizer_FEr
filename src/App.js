import React, { Fragment, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRouters } from './routers'
import DefaultLayout from './components/DefaultLayout'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import {getStorage} from 'firebase/storage'
import store from './redux/store'

const firebaseConfig = {
    apiKey: 'AIzaSyBP7wwbFT9wxZbr-JmKi3xhXbheyenmEGo',
    authDomain: 'recipe-organizer-swp391.firebaseapp.com',
    projectId: 'recipe-organizer-swp391',
    storageBucket: 'recipe-organizer-swp391.appspot.com',
    messagingSenderId: '925656558059',
    appId: '1:925656558059:web:3d0fe95ae7fd5b650e11ae',
    measurementId: 'G-GNPR3BQQ2R',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const storage = getStorage(app)
//Scroll Top when clicked another page
function ScrollToTop() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return null
}

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <ScrollToTop />
                    <Routes>
                        {publicRouters.map((route, index) => {
                            const Page = route.component
                            let Layout = DefaultLayout
                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = Fragment
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            )
                        })}
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App
