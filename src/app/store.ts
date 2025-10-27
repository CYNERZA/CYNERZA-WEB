import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../featured/auth/authSlice';
import blogSlice from '../featured/blog/blogSlice';
import departmentsSlice from "../featured/department/departmentSlice"
import jobPostSlice from "../featured/jobPost/jobPostSlice"
import themeSlice from '../featured/theme/themeSlice';
export const store = configureStore({
    reducer: {
        auth: authSlice,
        blog: blogSlice,
        department: departmentsSlice,
        jobPost: jobPostSlice,
        theme: themeSlice,
    }
})
export interface DepartmentState { loading: boolean; departments: DepartmentState[] }
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;