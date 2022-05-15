import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    itemInCart: 0,
    totalAmount: 0,
    showPopup: false,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        insertInCart: (state, action) => {
            state.itemInCart += 1
            state.cart.push(action.payload)
            state.totalAmount = state.cart
                .map((price) => {
                    const parse = parseFloat(
                        price.price.replace(/,/g, '.')
                    ).toFixed(2)
                    return Number(parse)
                })
                .reduce((acc, curr) => acc + curr, 0)
        },
    },
})

export const { insertInCart } = cartSlice.actions
export default cartSlice.reducer
