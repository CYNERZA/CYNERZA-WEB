// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { axiosInstance } from '../../helpers/axiosInstance';


// const initialState = {
//     loading: false,
//     blogPosts: [],
//     currentBlog: null,
//     recentBlogPosts: []
// }

// export const fetchBlogPosts = createAsyncThunk(
//     'blog/fetchBlogPosts',
//     async () => {
//         try {
//             const response = await axiosInstance.get('/blogs/');
//             return response.data;
//         } catch (error) {
//             console.error('Failed to fetch blog posts:', error.message);
//             throw error;
//         }
//     }
// );

// export const fetchRecentBlogPosts = createAsyncThunk(
//     'blog/fetchRecentBlogPosts',
//     async (limit) => {
//         try {
//             const response = await axiosInstance.get(`/blogs/recent?limit=${limit}`);
//             return response.data;
//         } catch (error) {
//             console.error('Failed to fetch recent blog posts:', error.message);
//             throw error;
//         }
//     }
// );

// export const getSignleBlogPost = createAsyncThunk(
//     'blog/singleBlogPost',
//     async (blogId) => {
//         try {
//             const response = await axiosInstance.get(`/blogs/${blogId}`);
//             return response.data;
//         } catch (error) {
//             console.error('Failed to fetch blog posts:', error.message);
//             throw error;
//         }
//     }
// );

// export const createBlogPost = createAsyncThunk(
//     'blog/createBlogPost',
//     async (blogPost) => {
//         try {
//             const response = await axiosInstance.post('/blogs/', blogPost);
//             return response.data;
//         } catch (error) {
//             console.error('Failed to create blog post:', error.message);
//             throw error;
//         }
//     }
// );

// export const updateBlogPost = createAsyncThunk(
//     "blog/updateBlogPost",
//     async ({ blogId, blogPost }) => {
//         try {
//             const response = await axiosInstance.patch(`/blogs/${blogId}`, blogPost)
//             return response.data
//         } catch (error) {
//             console.log("Failed to update blog post: ", error)
//             throw error
//         }
//     }
// )

// export const deleteBlogPost = createAsyncThunk(
//     "blog/deleteBlogPost",
//     async (blogId) => {
//         try {
//             const response = await axiosInstance.delete(`/blogs/${blogId}`)
//             return response.data
//         } catch (error) {
//             console.log("Failed to delete blog post: ", error.message)
//             throw error
//         }
//     }
// )

// const blogSlice = createSlice({
//     name: 'blog',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             // fetch all blogs 
//             .addCase(fetchBlogPosts.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(fetchBlogPosts.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.blogPosts = action.payload.data;
//             })
//             .addCase(fetchBlogPosts.rejected, (state, action) => {
//                 state.loading = false;
//             })

//             // fetch recent blog 
//             .addCase(fetchRecentBlogPosts.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(fetchRecentBlogPosts.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.recentBlogPosts = action.payload.data;
//             })
//             .addCase(fetchRecentBlogPosts.rejected, (state, action) => {
//                 state.loading = false;
//             })

//             // create blog 
//             .addCase(createBlogPost.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(createBlogPost.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.blogPosts.push(action.payload);
//             })
//             .addCase(createBlogPost.rejected, (state, action) => {
//                 state.loading = false;
//             })

//             // fetch single blog
//             .addCase(getSignleBlogPost.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(getSignleBlogPost.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.currentBlog = action.payload.data;
//             })
//             .addCase(getSignleBlogPost.rejected, (state, action) => {
//                 state.loading = false;
//             })

//             // update blog post
//             .addCase(updateBlogPost.pending, (state) => {
//                 state.loading = true
//             })
//             .addCase(updateBlogPost.fulfilled, (state, action) => {
//                 state.loading = false
//                 const index = state.blogPosts.findIndex(blog => blog._id === action.payload.data._id)
//                 if (index !== -1) {
//                     state.blogPosts[index] = action.payload.data
//                 }

//             })
//             .addCase(updateBlogPost.rejected, (state, action) => {
//                 state.loading = false
//             })

//             // delete blog post
//             .addCase(deleteBlogPost.pending, (state, action) => {
//                 state.loading = true
//             })
//             .addCase(deleteBlogPost.fulfilled, (state, action) => {
//                 state.loading = false
//                 const index = state.blogPosts.findIndex(blog => blog._id === action.payload._id)
//                 if (index !== -1) {
//                     state.blogPosts.splice(index, 1)
//                 }
//             })
//             .addCase(deleteBlogPost.rejected, (state, action) => {
//                 state.loading = false

//             })

//     },

// });

// export default blogSlice.reducer;



import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helpers/axiosInstance';

// ---------------------------------------
// TYPES
// ---------------------------------------

export interface BlogType {
  _id?: string;
  title: string;
  description: string;
  content: string;
  postingDate?: string;
  tags?: string[];
  thumbImage?: string;
  [key: string]: any;
}

interface BlogState {
  loading: boolean;
  blogPosts: BlogType[];
  currentBlog: BlogType | null;
  recentBlogPosts: BlogType[];
}

// ---------------------------------------
// INITIAL STATE
// ---------------------------------------

const initialState: BlogState = {
  loading: false,
  blogPosts: [],
  currentBlog: null,
  recentBlogPosts: []
};

// ---------------------------------------
// THUNKS
// ---------------------------------------

export const fetchBlogPosts = createAsyncThunk<{
  data: BlogType[];
}>('blog/fetchBlogPosts', async () => {
  const response = await axiosInstance.get('/blogs/');
  return response.data;
});

export const fetchRecentBlogPosts = createAsyncThunk<{
  data: BlogType[];
  
}, number | void>('blog/fetchRecentBlogPosts', async (limit) => {
  const response = await axiosInstance.get(`/blogs/recent?limit=${limit}`);
  return response.data;
});

export const getSingleBlogPost = createAsyncThunk<{
  data: BlogType;
}, string>('blog/singleBlogPost', async (blogId) => {
  const response = await axiosInstance.get(`/blogs/${blogId}`);
  return response.data;
});

export const createBlogPost = createAsyncThunk<BlogType, FormData>(
  'blog/createBlogPost',
  async (blogPost) => {
    const response = await axiosInstance.post('/blogs/', blogPost);
    return response.data;
  }
);

export const updateBlogPost = createAsyncThunk<{
  data: BlogType;
}, { blogId: string; blogPost: Partial<BlogType> }>(
  'blog/updateBlogPost',
  async ({ blogId, blogPost }) => {
    const response = await axiosInstance.patch(`/blogs/${blogId}`, blogPost);
    return response.data;
  }
);

export const deleteBlogPost = createAsyncThunk<{
  _id: string;
}, string>('blog/deleteBlogPost', async (blogId) => {
  const response = await axiosInstance.delete(`/blogs/${blogId}`);
  return response.data;
});

// ---------------------------------------
// SLICE
// ---------------------------------------

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch all blogs
      .addCase(fetchBlogPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.blogPosts = action.payload.data;
      })
      .addCase(fetchBlogPosts.rejected, (state) => {
        state.loading = false;
      })

      // Fetch recent blogs
      .addCase(fetchRecentBlogPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecentBlogPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.recentBlogPosts = action.payload.data;
      })
      .addCase(fetchRecentBlogPosts.rejected, (state) => {
        state.loading = false;
      })

      // Create blog
      .addCase(createBlogPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBlogPost.fulfilled, (state, action: PayloadAction<BlogType>) => {
        state.loading = false;
        state.blogPosts.unshift(action.payload);
      })
      .addCase(createBlogPost.rejected, (state) => {
        state.loading = false;
      })

      // Get single blog
      .addCase(getSingleBlogPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBlog = action.payload.data;
      })
      .addCase(getSingleBlogPost.rejected, (state) => {
        state.loading = false;
      })

      // Update blog
      .addCase(updateBlogPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.blogPosts.findIndex((b) => b._id === action.payload.data._id);
        if (index !== -1) {
          state.blogPosts[index] = action.payload.data;
        }
      })
      .addCase(updateBlogPost.rejected, (state) => {
        state.loading = false;
      })

      // Delete blog
      .addCase(deleteBlogPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        state.blogPosts = state.blogPosts.filter((blog) => blog._id !== action.payload._id);
      })
      .addCase(deleteBlogPost.rejected, (state) => {
        state.loading = false;
      });
  }
});

export default blogSlice.reducer;
