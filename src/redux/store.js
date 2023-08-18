import { configureStore } from '@reduxjs/toolkit'
import getAllRecipesReducer from './reducers/getAllDataRecipes'
import getAllIngredients from './reducers/getAllDataIngredients'
const store = configureStore({
    reducer: {
        getAllRecipes: getAllRecipesReducer,
        getAllIngredients : getAllIngredients,
    },
})

export default store
