import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { fetchData } from '../../api/getAllData'

import { getAllRecipe } from '../../api/getAllData'

export const fetchDataAsync = createAsyncThunk('data/fetchData', async () => {
    const data = await fetchData()
    return data
})

const getAllDataSlice = createSlice({
    name: 'getAllRecipes',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsync.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchDataAsync.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchDataAsync.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    },
})
export const getAllRecipes = getAllDataSlice.reducer
export default getAllRecipes
