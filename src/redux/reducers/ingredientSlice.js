
import { createSlice } from "@reduxjs/toolkit";
import {
    getAllIngredient,
    getIngredientDetail,
    addIngredient,
    updateIngredient,
    removeIngredient

} from '../apiThunk/ingredientThunk'

const ingredientSlice = createSlice({
    name: "ingredients",
    initialState: {
        ingredients: [],
        loading: false,
    },
    extraReducers: {
        // [changeRole.pending]: (state, action) => {
        //     state.loading = true;
        //     state.loading = "loading"
        // },
        // [changeRole.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.loading = "succeeded";
        //     // state.users = action.payload;
        // },
        // [changeRole.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.loading = "failed";
        // },
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