import { configureStore } from '@reduxjs/toolkit'
import getAllRecipesReducer from './reducers/getAllDataRecipes'
import planSlice from './reducers/planSlice'
import userSlice from './reducers/userSlice'
import getRecipeDetail from './reducers/getRecipeDetail'
import ingredientSlice from './reducers/ingredientSlice'
const store = configureStore({
    reducer: {
        getAllRecipes: getAllRecipesReducer,
        plan: planSlice,
        user: userSlice,
        getRecipeDetail: getRecipeDetail,
        ingredient: ingredientSlice
    },
})

export default store
