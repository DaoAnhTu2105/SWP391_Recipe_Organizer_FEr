import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ViewPlan from '../pages/ViewPlan'
import CreatePlan from '../pages/CreatePlan'
import CreateRecipe from '../pages/CreateRecipe'
import FavoriteRecipe from '../pages/FavortieRecipe'
import Register from '../pages/Register'
import UserList from '../pages/UserList'
import Login from '../pages/Login'
import Home from '../pages/Home/HomePage'
import NotFound from '../pages/NotFound'
import RecipeDetail from '../pages/RecipeDetail/RecipeDetail'
import MealDetail from '../pages/MealDetail'
import LayoutWithoutFilter from '../components/LayoutWithoutFilter'

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
        layout: null,
    },
    {
        path: '/error',
        name: 'error',
        component: NotFound,
        layout: null,
    },
    {
        path: '/create-plan',
        name: 'create-plan',
        component: CreatePlan,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/create-recipe',
        name: 'create-recipe',
        component: CreateRecipe,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/favorite-recipe',
        name: 'favorite-recipe',
        component: FavoriteRecipe,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        layout: null,
    },
    {
        path: '/user-list',
        name: 'user-list',
        component: UserList,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/view-plan',
        name: 'view-plan',
        component: ViewPlan,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/recipe-detail/:id',
        name: 'recipe-detail',
        component: RecipeDetail,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/meal-detail',
        name: 'meal-detail',
        component: MealDetail,
        layout: LayoutWithoutFilter
    },
]

export const privateRouters = []

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
