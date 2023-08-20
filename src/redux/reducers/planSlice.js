
import { createSlice } from "@reduxjs/toolkit";
import { getPlanByDate, getPlanByWeek } from "../apiThunk/planThunk";

const planSlice = createSlice({
    name: "plans",
    initialState: {
        plans: [],
        detail: [],
        loading: false,
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
    },
});

export default planSlice.reducer;