import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk('products/getFruits', async () => {
    const url = 'https://fruits-develhope.herokuapp.com/api'
    const response = await fetch(url)
    return await response.json()
})

const initialState = {
    fruits: [],
    error: '',
    isLoading: true,
}

const storeState = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.fruits = action.payload
                state.isLoading = false
            })
            .addCase(getProducts.rejected, (state) => {
                state.isLoading = false
                state.error = 'Impossibile caricare i dati dal server!'
            })
            .addDefaultCase((state, action) => {
                state.fruits = initialState
            })
    },
})

export default storeState.reducer
