import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CreatePlan from '../pages/CreatePlan'
import CreateRecipe from '../pages/CreateRecipe'
import FavoriteRecipe from '../pages/FavortieRecipe'
import Register from '../pages/Register'
import UserList from '../pages/UserList'
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
        path: '/create-plan',
        name: 'create-plan',
        component: CreatePlan
    },
    {
        path: '/create-recipe',
        name: 'create-recipe',
        component: CreateRecipe
    },
    {
        path: '/favorite-recipe',
        name: 'favorite-recipe',
        component: FavoriteRecipe
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/user-list',
        name: 'user-list',
        component: UserList
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