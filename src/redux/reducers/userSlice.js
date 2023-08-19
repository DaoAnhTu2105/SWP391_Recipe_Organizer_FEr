
import { createSlice } from "@reduxjs/toolkit";
import { getAllUser, changeRole } from "../apiThunk/userThunk";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
    },
    extraReducers: {
        [changeRole.pending]: (state, action) => {
            state.loading = true;
            state.loading = "loading"
        },
        [changeRole.fulfilled]: (state, action) => {
            state.loading = false;
            state.loading = "succeeded";
            // state.users = action.payload;
        },
        [changeRole.rejected]: (state, action) => {
            state.loading = false;
            state.loading = "failed";
        },
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