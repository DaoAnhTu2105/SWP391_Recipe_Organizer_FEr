import { configureStore } from '@reduxjs/toolkit'
import getAllRecipesReducer from './reducers/getAllDataRecipes'
const store = configureStore({
    reducer: {
        getAllRecipes: getAllRecipesReducer,
    },
})

export default store
