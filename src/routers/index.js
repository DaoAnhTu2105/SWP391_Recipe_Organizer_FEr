import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PlanMeal from '../pages/PlanMeal'
import CreatePlan from '../pages/CreatePlan'
import CreateRecipe from '../pages/CreateRecipe'
import FavoriteRecipe from '../pages/FavortieRecipe'
import Register from '../pages/Register'
import UserList from '../pages/UserList'
import Login from '../pages/Login'
import Home from '../pages/Home/HomePage'
import NotFound from '../pages/NotFound'
import RecipeDetail from '../pages/RecipeDetail/RecipeDetail'
import PlanDetail from '../pages/PlanDetail'
import LayoutWithoutFilter from '../components/LayoutWithoutFilter'
import Profile from '../pages/Profile'
import ViewCooker from '../pages/ViewCooker'
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
        path: '/plan',
        name: 'plan',
        component: PlanMeal,
        layout: LayoutWithoutFilter,
    },
    // {
    //     path: '/recipe-detail/:id',
    //     name: 'recipe-detail',
    //     component: RecipeDetail,
    //     layout: LayoutWithoutFilter,
    // },
    {
        path: '/recipe-detail',
        name: 'recipe-detail',
        component: RecipeDetail,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/plan-detail',
        name: 'plan-detail',
        component: PlanDetail,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/profile',
        name: 'user-profile',
        component: Profile,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/repice-cooker',
        name: 'repice-cooker',
        component: ViewCooker,
        layout: LayoutWithoutFilter,
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
