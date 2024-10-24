import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state, payload) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const { toggleMenu } = appSlice.actions 

export default appSlice.reducer;