import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosInstance";

const initialState = {
    loading: false,
    errorMessage: "",
    successMessage: "",
    status: false,
    userData: null,
}

export const login = createAsyncThunk("/auth/login", async (userData) => {
    try {
        const response = await axiosInstance.post("/users/login", userData);
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
});

export const logout = createAsyncThunk("/users/auth/logout", async () => {
    try {
        const response = await axiosInstance.post("/users/logout");
        return {};
    } catch (error) {
        console.error("Logout failed:", error);
        throw error;
    }
});

export const getCurrentUser = createAsyncThunk("/auth/currentUser", async () => {
    try {
        const response = await axiosInstance.get("/users/current-user");
        return response.data.data;
    } catch (error) {
        console.error("Failed to fetch current user:", error);
        throw error;
    }
});

const authSlice = createSlice({
    name: "auth",  
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.errorMessage = "";
                state.successMessage = "";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.status = true;
                state.successMessage = action.payload.message;
                state.errorMessage = "";
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.status = false;
                state.errorMessage = action.error.message
                state.successMessage = "";
            })
            .addCase(logout.pending, (state) => {
                state.loading = true;
                state.successMessage = "";
                state.errorMessage = "";
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                state.status = false;
                state.userData = null;
                state.successMessage = action.payload.message;
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.successMessage = "";
                state.errorMessage = action.error.message;
            })
            .addCase(getCurrentUser.pending, (state) => {
                state.loading = true;
                state.successMessage = "";
                state.errorMessage = "";
            
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
                state.status = true;
                
            })
            .addCase(getCurrentUser.rejected, (state) => {
                state.loading = false;
                state.status = false;
                state.userData = null;
            });
    }
});

export default authSlice.reducer;