import { axiosInstance } from "@/helpers/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * Types
 */
export interface Department {
    _id: string;
    name: string;
    //   [key: string]: any;
}

type ApiResponse<T> = {
    data: T;
};

interface DepartmentState {
    loading: boolean;
    departments: Department[];
}

/**
 * Initial state
 */
const initialState: DepartmentState = {
    loading: false,
    departments: [],
};

export const fetchAllDepartments = createAsyncThunk<
    ApiResponse<Department[]>,
    void
>("department/fetchAllDepartments", async () => {
    try {
        const response = await axiosInstance.get("/departments/");
        return response.data;
    } catch (error) {
        console.log("Failed to fetched department: ", error)
        throw error
    }
});

export const createDepartment = createAsyncThunk<
    ApiResponse<Department>,
    FormData,
    { rejectValue: string }
>("department/createDepartment", async (formData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/departments/", formData);
        return response.data;
    } catch (error) {
        console.log("Failed to create department: ", error)
        return rejectWithValue(error.response?.data?.message || "Failed to create department...!");
    }
});

export const deleteDepartment = createAsyncThunk<
    ApiResponse<{ _id: string }>,
    string
>("department/deleteDepartment", async (departmentId) => {
    try {
        const response = await axiosInstance.delete(`/departments/${departmentId}`);
        return response.data;
    } catch (error) {
        console.log("Failed to delete department", error)
        throw error
    }
});

/**
 * Slice
 */
const departmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all
            .addCase(fetchAllDepartments.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllDepartments.fulfilled, (state, action) => {
                state.loading = false;
                state.departments = action.payload.data;
            })
            .addCase(fetchAllDepartments.rejected, (state) => {
                state.loading = false;
            })

            // create
            .addCase(createDepartment.pending, (state) => {
                state.loading = true;
            })
            .addCase(createDepartment.fulfilled, (state, action) => {
                state.loading = false;
                // insert newly created department at start
                state.departments.unshift(action.payload.data);
            })
            .addCase(createDepartment.rejected, (state) => {
                state.loading = false;
            })

            // delete
            .addCase(deleteDepartment.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteDepartment.fulfilled, (state, action) => {
                state.loading = false;
                state.departments = state.departments.filter(
                    (d) => d._id !== action.payload.data._id
                );
            })
            .addCase(deleteDepartment.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default departmentSlice.reducer;
