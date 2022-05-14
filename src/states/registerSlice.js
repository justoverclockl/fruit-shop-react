import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {},
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        register: (state, action) => {
            state.userData = action.payload
        },
    },
})

export const { register } = userSlice.actions
export const selectUser = (state) => state.users.userData
export default userSlice.reducer
