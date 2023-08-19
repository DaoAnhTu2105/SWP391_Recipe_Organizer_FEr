import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllApi,
    getDetailApi,
    addApi,
    updateApi,
    removeApi
} from '../../api/ingredient'

export const getAllIngredient = createAsyncThunk(
    "user/fetchUser",
    async (thunkAPI) => {
        try {
            const response = await getAllApi();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getIngredientDetail = createAsyncThunk(
    "uesr/fetchUser",
    async ({ id }, thunkAPI) => {
        try {
            const response = await getDetailApi(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const addIngredient = createAsyncThunk(
    "uesr/banUser",
    async ({ data }, thunkAPI) => {
        try {
            const response = await addApi(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateIngredient = createAsyncThunk(
    "uesr/unbanUser",
    async ({ id, data }, thunkAPI) => {
        try {
            const response = await updateApi(id, data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const removeIngredient = createAsyncThunk(
    "uesr/unbanUser",
    async ({ id }, thunkAPI) => {
        try {
            const response = await removeApi(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
