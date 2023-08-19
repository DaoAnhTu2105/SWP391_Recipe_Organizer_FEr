import { configureStore } from '@reduxjs/toolkit'
import getAllRecipesReducer from './reducers/getAllDataRecipes'
import planSlice from './reducers/planSlice'
import userSlice from './reducers/userSlice'
import getRecipeDetail from './reducers/getRecipeDetail'
import ingredientSlice from './reducers/ingredientSlice'
import bestRecipe from './reducers/getBestRecipesSlice'
import favoriteRecipe from './reducers/getFavoritesRecipeSlice'
const store = configureStore({
    reducer: {
        getAllRecipes: getAllRecipesReducer,
        plan: planSlice,
        user: userSlice,
        getRecipeDetail: getRecipeDetail,
        ingredient: ingredientSlice,
        bestRecipe: bestRecipe,
        favoriteRecipe: favoriteRecipe,
    },
})

export default store
