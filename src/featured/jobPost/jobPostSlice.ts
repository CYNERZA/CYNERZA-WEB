import { axiosInstance } from "@/helpers/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * Types
 */

interface JobPosition {
    _id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
}

// export interface Department {
//     _id: string;
//     name: string;
//     //   [key: string]: any;
// }

type ApiResponse<T> = {
    data: T;
};

interface jobPostState {
    loading: boolean;
    jobPosts: JobPosition[];
    currentJob: JobPosition
    filteredJobPosts: JobPosition[];
}

/**
 * Initial state
 */
const initialState: jobPostState = {
    loading: false,
    jobPosts: [],
    currentJob: null,
    filteredJobPosts: []
};

export const getAllJobPosts = createAsyncThunk<
    ApiResponse<JobPosition[]>,
    void
>("job-posts/getAllJobPosts", async () => {
    try {
        const response = await axiosInstance.get("/job-posts/");
        return response.data;
    } catch (error) {
        console.log("Failed to fetched job posts: ", error)
        throw error
    }
});

export const createJobPost = createAsyncThunk<
    ApiResponse<JobPosition>,
    FormData,
    { rejectValue: string }
>("job-posts/createJobPost", async (formData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/job-posts/", formData);
        return response.data;
    } catch (error) {
        console.log("Failed to create job post: ", error)
        return rejectWithValue(error.response?.data?.message || "Failed to create job post...!");
    }
});

export const getSingleJob = createAsyncThunk<{
    data: JobPosition;
}, string>('job-posts/singleJob', async (jobPostId) => {
    try {
        const response = await axiosInstance.get(`/job-posts/${jobPostId}`);
        return response.data;
    } catch (error) {
        console.log("Failed to fetch job post: ", error)
        throw error
    }
});


export const deleteJobPost = createAsyncThunk<{
    _id: string;
}, string>('job-posts/deleteJobPost', async (jobPostId) => {
    try {
        const response = await axiosInstance.delete(`/job-posts/${jobPostId}`);
        return response.data;
    } catch (error) {
        console.log("Failed to delete job post", error)
        throw error
    }
});


export const UpdateJobPosts = createAsyncThunk<{
    data: JobPosition;
}, { jobPostId: string; jobPost: Partial<JobPosition> }>(
    'job-posts/UpdateJobPosts',
    async ({ jobPostId, jobPost }) => {
        const response = await axiosInstance.patch(`/job-posts/${jobPostId}`, jobPost);
        return response.data;
    }
);

/**
 * Slice
 */
const jobPostSlice = createSlice({
    name: "job-posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all
            .addCase(getAllJobPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllJobPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.jobPosts = action.payload.data;
            })
            .addCase(getAllJobPosts.rejected, (state) => {
                state.loading = false;
            })

            // fetch single
            .addCase(getSingleJob.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSingleJob.fulfilled, (state, action) => {
                state.loading = false;
                state.currentJob = action.payload.data;
            })
            .addCase(getSingleJob.rejected, (state) => {
                state.loading = false;
            })

            // create
            .addCase(createJobPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(createJobPost.fulfilled, (state, action) => {
                state.loading = false;
                // insert newly created department at start
                state.jobPosts.unshift(action.payload.data);
            })
            .addCase(createJobPost.rejected, (state) => {
                state.loading = false;
            })

            // delete
            .addCase(deleteJobPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteJobPost.fulfilled, (state, action) => {
                state.loading = false;
                console.log("action: ", action)
                console.log("jobPosts first: ", state.jobPosts)
                state.jobPosts = state.jobPosts.filter(job => job._id !== action.meta.arg)
                console.log("jobPosts before: ", state.jobPosts)

            })
            .addCase(deleteJobPost.rejected, (state) => {
                state.loading = false;
            })

            // Update
            .addCase(UpdateJobPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(UpdateJobPosts.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.jobPosts.findIndex((b) => b._id === action.payload.data._id);
                if (index !== -1) {
                    state.jobPosts[index] = action.payload.data;
                }
            })
            .addCase(UpdateJobPosts.rejected, (state) => {
                state.loading = false;
            })
    },
});

export default jobPostSlice.reducer;
