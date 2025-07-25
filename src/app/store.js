import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../featured/auth/authSlice';
import blogSlice from '../featured/blog/blogSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        blog: blogSlice
    }
})