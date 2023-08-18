import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchIngredientData } from '../../api/getAllIngredients'

export const fetchIngredientsDataAsync = createAsyncThunk('data/fetchData', async () => {
    const data = await fetchIngredientData()
    return data
})

const getAllDataSlice = createSlice({
    name: 'getAllIngredientsApi',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngredientsDataAsync.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchIngredientsDataAsync.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchIngredientsDataAsync.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    },
})
export const getAllIngredients = getAllDataSlice.reducer
export default getAllIngredients
