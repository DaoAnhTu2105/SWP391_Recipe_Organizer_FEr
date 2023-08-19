import { createSlice } from "@reduxjs/toolkit";
import {
    getAllIngredient

} from '../apiThunk/ingredientThunk'

const ingredientSlice = createSlice({
    name: "ingredients",
    initialState: {
        ingredients: [],
        loading: false,
    },
    extraReducers: {
        [getAllIngredient.pending]: (state, action) => {
            state.loading = true;
            state.loading = "loading"
        },
        [getAllIngredient.fulfilled]: (state, action) => {
            state.loading = false;
            state.loading = "succeeded";
            state.ingredients = action.payload;
        },
        [getAllIngredient.rejected]: (state, action) => {
            state.loading = false;
            state.loading = "failed";
        },
    },
});

export default ingredientSlice.reducer;