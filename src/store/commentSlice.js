import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: {
        comments: []
    },
    reducers: {
        addComments: (state, action) => {
            state.comments = action.payload
        }
    }
})

export const { addComments } = commentSlice.actions

export default commentSlice.reducer