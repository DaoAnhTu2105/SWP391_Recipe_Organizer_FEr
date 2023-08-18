import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getUsers,
    updateRole
} from '../../api/user'

export const getAllUser = createAsyncThunk(
    "plan/fetchUser",
    async (thunkAPI) => {
        try {
            const response = await getUsers();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const changeRole = createAsyncThunk(
    "plan/fetchPlan",
    async ({ id, role }, thunkAPI) => {
        try {
            const response = await updateRole({ id, role });
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
