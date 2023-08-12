import { createSlice } from '@reduxjs/toolkit'

const getAllDataSlice = createSlice({
    name: 'getAllRecipes',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true
            state.error = null
        },
        fetchDataSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        fetchDataFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
})
export const getAllRecipes = getAllDataSlice.reducer
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = getAllDataSlice.actions
export default getAllRecipes
