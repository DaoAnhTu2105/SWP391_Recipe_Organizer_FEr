
import { createSlice } from "@reduxjs/toolkit";
import { getPlanByDate, getPlanByWeek } from "../apiThunk/planThunk";

const planSlice = createSlice({
    name: "plans",
    initialState: {
        plan: [],
        loading: false,
    },
    extraReducers: {
        [getPlanByDate.pending]: (state, action) => {
            state.loading = true;
            state.loading = "loading"
        },
        [getPlanByDate.fulfilled]: (state, action) => {
            state.loading = false;
            state.loading = "succeeded";
            state.plan = action.payload;
        },
        [getPlanByDate.rejected]: (state, action) => {
            state.loading = false;
            state.loading = "failed";
        },
        [getPlanByWeek.pending]: (state, action) => {
            state.loading = true;
            state.loading = "loading"
        },
        [getPlanByWeek.fulfilled]: (state, action) => {
            state.loading = false;
            state.loading = "succeeded";
            state.plan = action.payload;
        },
        [getPlanByWeek.rejected]: (state, action) => {
            state.loading = false;
            state.loading = "failed";
        },
    },
});

export default planSlice.reducer;