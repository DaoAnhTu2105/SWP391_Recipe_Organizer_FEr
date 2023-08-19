import React, { Fragment, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import DefaultLayout from '../components/DefaultLayout'

import PlanMeal from '../pages/PlanMeal'
import CreatePlan from '../pages/CreatePlan'
import CreateRecipe from '../pages/CreateRecipe'
import FavoriteRecipe from '../pages/FavortieRecipe'
import Register from '../pages/Register'
// import UserList from '../pages/Register/UserList'
import UserList from '../pages/UserList'
import IngredientList from '../pages/Ingredients'
import UpdateIngredient from '../pages/UpdateIngredient'
import Login from '../pages/Login'
import Home from '../pages/Home/HomePage'
import NotFound from '../pages/NotFound'
import RecipeDetail from '../pages/RecipeDetail/RecipeDetail'
import PlanDetail from '../pages/PlanDetail'
import LayoutWithoutFilter from '../components/LayoutWithoutFilter'
import Profile from '../pages/Profile'
import ViewCooker from '../pages/ViewCooker'
import PrivateRouters from './PrivateRouters'
import AdminRouters from './AdminRouters'

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
        path: '/plan',
        name: 'plan',
        component: PlanMeal,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/recipe-detail/:id',
        name: 'recipe-detail',
        component: RecipeDetail,
        layout: LayoutWithoutFilter,
    },
]

export const privateRouters = [
    {
        path: '/profile',
        name: 'user-profile',
        component: Profile,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/plan-detail',
        name: 'plan-detail',
        component: PlanDetail,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/recipe-cooker',
        name: 'recipe-cooker',
        component: ViewCooker,
        layout: LayoutWithoutFilter,
    },
]

export const adminRouters = [
    {
        path: '/user-list',
        name: 'user-list',
        component: UserList,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/ingredient-list',
        name: 'ingredient-list',
        component: IngredientList,
        layout: LayoutWithoutFilter,
    },
    {
        path: '/ingredient-detail/:id',
        name: 'ingredient-detail',
        component: UpdateIngredient,
        layout: LayoutWithoutFilter,
    },
]

//Scroll Top when clicked another page
function ScrollToTop() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return null
}

export const RouterComponents = () => {
    return (
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
                    <Route exact path="/" element={<PrivateRouters />}>
                        {privateRouters.map((route, index) => {
                            // const user = JSON.parse(localStorage.getItem('user'))
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
                    </Route>
                    <Route exact path="/" element={<AdminRouters />}>
                        {adminRouters.map((route, index) => {
                            // const user = JSON.parse(localStorage.getItem('user'))
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
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
