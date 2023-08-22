
import { createSlice } from "@reduxjs/toolkit";
import { getPlanByDate, getPlanByWeek, getDetail, getRecipesPlan } from "../apiThunk/planThunk";

const planSlice = createSlice({
    name: "plans",
    initialState: {
        plans: [],
        detail: [],
        food: [],
        recipePlan: [],
        loading: false,
        loadingPlan: false,
    },
    extraReducers: {
        [getPlanByWeek.pending]: (state, action) => {
            state.loading = true;
            state.loading = "loading"
        },
        [getPlanByWeek.fulfilled]: (state, action) => {
            state.loading = false;
            state.loading = "succeeded";
            state.plans = action.payload;
        },
        [getPlanByWeek.rejected]: (state, action) => {
            state.loading = false;
            state.loading = "failed";
        },
        [getPlanByDate.pending]: (state, action) => {
            state.loading = true;
            state.loading = "loading"
        },
        [getPlanByDate.fulfilled]: (state, action) => {
            state.loading = false;
            state.loading = "succeeded";
            state.detail = action.payload;
        },
        [getPlanByDate.rejected]: (state, action) => {
            state.loading = false;
            state.loading = "failed";
        },
        [getDetail.pending]: (state, action) => {
            state.loading = true;
            state.loading = "loading"
        },
        [getDetail.fulfilled]: (state, action) => {
            state.loading = false;
            state.loading = "succeeded";
            state.food = action.payload;
        },
        [getDetail.rejected]: (state, action) => {
            state.loading = false;
            state.loading = "failed";
        },
        [getRecipesPlan.pending]: (state, action) => {
            state.loadingPlan = true;
            state.loadingPlan = "loading"
        },
        [getRecipesPlan.fulfilled]: (state, action) => {
            state.loadingPlan = false;
            state.loadingPlan = "succeeded";
            state.recipePlan = action.payload;
        },
        [getRecipesPlan.rejected]: (state, action) => {
            state.loadingPlan = false;
            state.loadingPlan = "failed";
        },
    },
});

export default planSlice.reducer;