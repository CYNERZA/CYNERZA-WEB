import { axiosInstance } from "@/helpers/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Async Thunk to create industry (POST)
export const createIndustry = createAsyncThunk(
  "industry/create",
  async (data: { name: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/industries", data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create industry"
      );
    }
  }
);

// Async Thunk to get all industries (GET)
export const fetchAllIndustries = createAsyncThunk(
  "industry/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/industries");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch industries"
      );
    }
  }
);



// Initial State
interface IndustryState {
  industries: any[];
  loading: boolean;
}

const initialState: IndustryState = {
  industries: [],
  loading: false,
};

// Industry Slice
const industrySlice = createSlice({
  name: "industry",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create Industry
    builder
      .addCase(createIndustry.pending, (state) => {
        state.loading = true;
      })
      .addCase(createIndustry.fulfilled, (state, action) => {
        state.loading = false;
        state.industries.push(action.payload.data);
      })
      .addCase(createIndustry.rejected, (state, action: any) => {
        state.loading = false;
      });

    // Fetch All Industries
    builder
      .addCase(fetchAllIndustries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllIndustries.fulfilled, (state, action) => {
        state.loading = false;
        state.industries = action.payload.data;
      })
      .addCase(fetchAllIndustries.rejected, (state, action: any) => {
        state.loading = false;
      });
  },
});

export default industrySlice.reducer;
