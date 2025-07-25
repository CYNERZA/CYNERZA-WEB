import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helpers/axiosInstance';


const initialState = {
    loading: false,
    errorMessage: '',
    successMessage: '',
    blogPosts: [],
}

export const fetchBlogPosts = createAsyncThunk(
    'blog/fetchBlogPosts',
    async () => {
        try {
            const response = await axiosInstance.get('/blogs/');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch blog posts:', error);
            throw error;
        }
    }
);

export const createBlogPost = createAsyncThunk(
    'blog/createBlogPost',
    async (newPost) => {
        try {
            console.log({newPost})
            const response = await axiosInstance.post('/blogs/', newPost);
            return response.data;
        } catch (error) {
            console.error('Failed to create blog post:', error);
            throw error;
        }
    }
);


const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},   
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogPosts.pending, (state) => {
                state.loading = true;
                state.errorMessage = '';
                state.successMessage = '';
            })
            .addCase(fetchBlogPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.blogPosts = action.payload.data;
                state.successMessage = action.payload.message;
                state.errorMessage = '';
            })
            .addCase(fetchBlogPosts.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.error.message;
            })
            .addCase(createBlogPost.pending, (state) => {
                state.loading = true;
                state.errorMessage = '';
                state.successMessage = '';
            })
            .addCase(createBlogPost.fulfilled, (state, action) => {
                state.loading = false;
                state.blogPosts.push(action.payload);
                state.successMessage = action.payload.message;
                state.errorMessage = '';
            })
            .addCase(createBlogPost.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.error.message;
            });
    },

});

export default blogSlice.reducer;

