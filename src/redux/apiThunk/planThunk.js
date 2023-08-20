import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getPlanDate,
    getPlanWeek
} from "../../api/plan";

export const getPlanByDate = createAsyncThunk(
    "plan/fetchPlan",
    async ({ date }, thunkAPI) => {
        try {
            const response = await getPlanDate(date);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getPlanByWeek = createAsyncThunk(
    "plan/fetchPlanDetail",
    async ({ date }, thunkAPI) => {
        try {
            const response = await getPlanWeek(date);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
