import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../featured/auth/authSlice';
import blogSlice from '../featured/blog/blogSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        blog: blogSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;