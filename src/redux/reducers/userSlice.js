
import { createSlice } from "@reduxjs/toolkit";
import { getAllUser, banUser, unbanUser } from "../apiThunk/userThunk";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
    },
    extraReducers: {
        // [banUser.pending]: (state, action) => {
        //     state.loading = true;
        //     state.loading = "loading"
        // },
        // [banUser.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.loading = "succeeded";
        //     state.users = action.payload;
        // },
        // [banUser.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.loading = "failed";
        // },
        // [unbanUser.pending]: (state, action) => {
        //     state.loading = true;
        //     state.loading = "loading"
        // },
        // [unbanUser.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.loading = "succeeded";
        //     state.users = action.payload;
        // },
        // [unbanUser.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.loading = "failed";
        // },
        [getAllUser.pending]: (state, action) => {
            state.loading = true;
            state.loading = "loading"
        },
        [getAllUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.loading = "succeeded";
            state.users = action.payload;
        },
        [getAllUser.rejected]: (state, action) => {
            state.loading = false;
            state.loading = "failed";
        },
    },
});

export default userSlice.reducer;