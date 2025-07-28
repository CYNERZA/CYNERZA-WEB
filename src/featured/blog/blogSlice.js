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
            console.error('Failed to fetch blog posts:', error.message);
            throw error;
        }
    }
);

export const createBlogPost = createAsyncThunk(
    'blog/createBlogPost',
    async (blogPost) => {
        try {
            const response = await axiosInstance.post('/blogs/', blogPost);
            return response.data;
        } catch (error) {
            console.error('Failed to create blog post:', error.message);
            throw error;
        }
    }
);

export const updateBlogPost = createAsyncThunk(
    "blog/updateBlogPost",
    async ({ blogId, blogPost }) => {
        try {
            const response = await axiosInstance.patch(`/blogs/${blogId}`, blogPost)
            return response.data
        } catch (error) {
            console.log("Failed to update blog post: ", error.message)
            throw error
        }
    }
)

export const deleteBlogPost = createAsyncThunk(
    "blog/deleteBlogPost",
    async (blogId) => {
        try {
            const response = await axiosInstance.delete(`/blogs/${blogId}`)
            return response.data
        } catch (error) {
            console.log("Failed to delete blog post: ", error.message)
            throw error
        }
    }
)

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all blogs 
            .addCase(fetchBlogPosts.pending, (state) => {
                state.loading = true;
                state.errorMessage = "";
                state.successMessage = "";
            })
            .addCase(fetchBlogPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.blogPosts = action.payload.data;
                state.successMessage = action.payload.message;
                state.errorMessage = "";
            })
            .addCase(fetchBlogPosts.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.error.message;
                state.successMessage = ""
            })

            // create blog 
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
            })

            // update blog post
            .addCase(updateBlogPost.pending, (state) => {
                state.loading = true
                state.successMessage = ""
                state.errorMessage = ""
            })
            .addCase(updateBlogPost.fulfilled, (state, action) => {
                state.loading = false
                const index = state.blogPosts.findIndex(blog => blog._id === action.payload.data._id)
                if (index !== -1) {
                    state.blogPosts[index] = action.payload.data
                }
                state.successMessage = action.payload.message
                state.errorMessage = ""

            })
            .addCase(updateBlogPost.rejected, (state, action) => {
                state.loading = false
                state.errorMessage = action.error.message
                state.successMessage = ""
            })

            // delete blog post
            .addCase(deleteBlogPost.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteBlogPost.fulfilled, (state, action) => {
                state.loading = false
                const index = state.blogPosts.findIndex(blog => blog._id === action.payload._id)
                if (index !== -1) {
                    state.blogPosts.splice(index, 1)
                }
            })
            .addCase(deleteBlogPost.rejected, (state, action) => {
                state.loading = false

            })

    },

});

export default blogSlice.reducer;

