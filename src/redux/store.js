import { configureStore } from '@reduxjs/toolkit'
import getAllRecipesReducer from './reducers/getAllDataRecipes'
import planSlice from "./reducers/planSlice";
const store = configureStore({
    reducer: {
        getAllRecipes: getAllRecipesReducer,
        plan: planSlice,
    },
})

export default store
