import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



// Async Thunk to get all industries (GET)
export const fetchAllRegions = createAsyncThunk(
  "region/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://api.first.org/data/v1/countries?limit=15&sort=country&region=Asia&subregion=Southern%20Asia");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch regions"
      );
    }
  }
);



// Initial State
interface RegionState {
  regions: any[];
  loading: boolean;
}

const initialState: RegionState = {
  regions: [],
  loading: false,
};

// Industry Slice
const industrySlice = createSlice({
  name: "region",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   
    // Fetch All Regions
    builder
      .addCase(fetchAllRegions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllRegions.fulfilled, (state, action) => {
        state.loading = false;
        const dataArray = Object.values(action.payload.data);
        state.regions = dataArray;
      })
      .addCase(fetchAllRegions.rejected, (state, action: any) => {
        state.loading = false;
      });
  },
});

export default industrySlice.reducer;
    