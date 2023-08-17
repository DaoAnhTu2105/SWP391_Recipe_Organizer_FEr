
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
        },
        [getPlanByDate.fulfilled]: (state, action) => {
            state.loading = false;
            state.plan = action.payload;
        },
        [getPlanByDate.rejected]: (state, action) => {
            state.loading = false;
        },
        [getPlanByWeek.pending]: (state, action) => {
            state.loading = true;
        },
        [getPlanByWeek.fulfilled]: (state, action) => {
            state.loading = false;
            state.plan = action.payload;
        },
        [getPlanByWeek.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default planSlice.reducer;