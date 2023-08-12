import { configureStore } from '@reduxjs/toolkit'
import getAllRecipes from './reducers/getAllDataRecipes'
const store = configureStore({
    reducer: {
        getAllRecipes,
    },
})

export default store
