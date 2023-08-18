import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchDetailData } from '../../api/getAllData'

export const fetchRecipeDetail = createAsyncThunk('data/fetchData', async () => {
    const data = await fetchDetailData()
    return data
})

const getDetailRecipe = createSlice({
    name: 'getDetailRecipe',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipeDetail.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchRecipeDetail.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchRecipeDetail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    },
})
export const getRecipeDetail = getDetailRecipe.reducer
export default getRecipeDetail
