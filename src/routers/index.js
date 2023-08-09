import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home/HomePage'
import NotFound from '../pages/NotFound'

export const publicRouters = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/error',
        name: 'error',
        component: NotFound
    },
    {
        path: '/error',
        name: 'error',
        component: NotFound
    },
    {
        path: '/error',
        name: 'error',
        component: NotFound
    },
    {
        path: '/error',
        name: 'error',
        component: NotFound
    }

]

export const privateRouters = [

]

// export const RouterComponents = () => {
//     return (
//         <Router>
//             <Route exact path="/home" component={Home} />
//                 <Redirect exact from="/" to="/home" />
//                 <Route exact path="" render={() => <Redirect to="" />} />
//                 <Route path="" component={} />
//                 {privateRouters.map((route) => (
//                     <PrivateRouters
//                         key={route.name}
//                         path={route.path}
//                         component={route.component}
//                         exact
//                     />
//                 ))}
//             {publicRouters.map((route) => (
//                 <PublicRouters
//                     key={route.name}
//                     path={route.path}
//                     component={route.component}
//                     exact
//                 />
//             ))}
//             <Route component={NotFound} />
//         </Router>
//     )
// }