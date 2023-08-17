/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import DefaultLayout from '../components/DefaultLayout'
// import PropTypes from 'prop-types'
import { Navigate, Outlet } from 'react-router'

// const PrivateRouters = ({ path, component: Component, layout, index }) => {
//     let isAuthenticated = JSON.parse(localStorage.getItem("user"));
//     let Layout = DefaultLayout
//     if (layout) {
//         Layout = layout
//     } else if (layout === null) {
//         Layout = Fragment
//     }

//     return (
//         <Route
//             key={index}
//             path={path}
//             element={
//                 isAuthenticated ? (
//                     <Layout>
//                         <Component />
//                     </Layout>
//                 ) : (
//                     <Navigate to="/error" replace />
//                 )
//             }
//         />
//     );
// }

const PrivateRouters = () => {
    let isAuthenticated = JSON.parse(localStorage.getItem("user"));
    return isAuthenticated ? <Outlet /> : <Navigate to="/error" />;
}

// PrivateRouters.propTypes = {
//     path: PropTypes.string,
//     component: PropTypes.elementType,
//     layout: PropTypes.string,
//     index: PropTypes.any
// }

export default PrivateRouters
