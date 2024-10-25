import appSlice from './appSlice';
import videoSlice from './videoSlice';
import commentSlice from './commentSlice';
import searchSlice from './searchSlice';
import { configureStore } from '@reduxjs/toolkit';

const appStore = configureStore({
    reducer: {
        app: appSlice,
        video: videoSlice,
        comment: commentSlice,
        search: searchSlice,
    }
})

export default appStore