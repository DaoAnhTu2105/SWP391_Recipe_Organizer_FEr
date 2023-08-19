import { configureStore } from '@reduxjs/toolkit'
import getAllRecipesReducer from './reducers/getAllDataRecipes'
import planSlice from './reducers/planSlice'
import userSlice from './reducers/userSlice'
import getRecipeDetail from './reducers/getRecipeDetail'
<<<<<<< HEAD
import bestRecipe from './reducers/getBestRecipesSlice'
import favoriteRecipe from './reducers/getFavoritesRecipeSlice'
=======
import ingredientSlice from './reducers/ingredientSlice'
>>>>>>> main
const store = configureStore({
    reducer: {
        getAllRecipes: getAllRecipesReducer,
        plan: planSlice,
        user: userSlice,
        getRecipeDetail: getRecipeDetail,
<<<<<<< HEAD
        bestRecipe: bestRecipe,
        favoriteRecipe: favoriteRecipe,
=======
        ingredient: ingredientSlice
>>>>>>> main
    },
})

export default store
