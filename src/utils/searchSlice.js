import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        tempResults: {}
    },
    reducers: {
        cacheResults: (state, action) => {
            state.tempResults = {...action.payload, ...state.tempResults}
        }
    }
})

export const { cacheResults } = searchSlice.actions
export default searchSlice.reducer;