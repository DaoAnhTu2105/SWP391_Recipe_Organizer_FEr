import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllRecipe } from "../../api/getAllData";

export const getUserList = createAsyncThunk(
    "meal/fetchMeals",
    async (thunkAPI) => {
        try {
            const response = await getAllRecipe();
            // console.log(response);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);