
import { createSlice } from "@reduxjs/toolkit";
import { getAllUser, changeRole } from "../apiThunk/userThunk";

const userSlice = createSlice({
    name: "plans",
    initialState: {
        plan: [],
        loading: false,
    },
    extraReducers: {
        [getAllUser.pending]: (state, action) => {
            state.loading = true;
            state.loading = "loading"
        },
        [getAllUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.loading = "succeeded";
            state.plan = action.payload;
        },
        [getAllUser.rejected]: (state, action) => {
            state.loading = false;
            state.loading = "failed";
        },
        [changeRole.pending]: (state, action) => {
            state.loading = true;
            state.loading = "loading"
        },
        [changeRole.fulfilled]: (state, action) => {
            state.loading = false;
            state.loading = "succeeded";
            state.plan = action.payload;
        },
        [changeRole.rejected]: (state, action) => {
            state.loading = false;
            state.loading = "failed";
        },
    },
});

export default userSlice.reducer;