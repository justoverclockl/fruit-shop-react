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
    status: 'idle',
}

const storeState = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading'
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.type)
                state.isLoading = false
                state.fruits = action.payload
            })
            .addCase(getProducts.rejected, (state) => {
                state.status = 'failed'
                state.isLoading = false
                state.error = 'Impossibile caricare i dati dal server!'
            })
            .addDefaultCase((state, action) => {
                if (action.type !== 'cart/insertInCart') {
                    state.status = 'idle'
                    state.isLoading = false
                    state.fruits = initialState
                }
            })
    },
})

export const selectAllProducts = (state) => state.products.fruits
export const productStatus = (state) => state.products.status
export const loadingState = (state) => state.products.isLoading
export const errorState = (state) => state.products.error
export default storeState.reducer
