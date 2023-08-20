import { configureStore } from '@reduxjs/toolkit'
import getAllRecipesReducer from './reducers/getAllDataRecipes'
import planSlice from "./reducers/planSlice";
import userSlice from './reducers/userSlice';
import getAllIngredients from './reducers/getAllDataIngredients';
import getAllMeals from './reducers/getAllDataMeal';
import getAllCountriesAdd from './reducers/getAllDataCountriesAdd';

const store = configureStore({
    reducer: {
        getAllRecipes: getAllRecipesReducer,
        plan: planSlice,
        user: userSlice,
        getAllIngredients: getAllIngredients,
        allCountries: getAllMeals,
        allMeals: getAllCountriesAdd
    },
})

export default store
