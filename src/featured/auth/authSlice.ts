// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../../helpers/axiosInstance";

// const initialState = {
//     loading: false,
//     status: false,
//     userData: null,
// }

// export const login = createAsyncThunk(
//     "/auth/login",
//     async (userData, { rejectWithValue }) => {
//         try {
//             const response = await axiosInstance.post("/users/login", userData);
//             return response.data;
//         } catch (error) {
//             console.error("Login failed:", error);
//             return rejectWithValue(error.response?.data?.message || "Login failed");
//         }
//     }
// );

// export const logout = createAsyncThunk("/users/auth/logout", async () => {
//     try {
//         const response = await axiosInstance.post("/users/logout");
//         return response.data;
//     } catch (error) {
//         console.error("Logout failed:", error);
//         throw error;
//     }
// });

// export const getCurrentUser = createAsyncThunk("/auth/currentUser", async () => {
//     try {
//         const response = await axiosInstance.get("/users/current-user");
//         return response.data.data;
//     } catch (error) {
//         console.error("Failed to fetch current user:", error);
//         throw error;
//     }
// });

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             // login
//             .addCase(login.pending, (state) => {
//                 state.loading = true;
//                 state.errorMessage = "";
//                 state.successMessage = "";
//             })
//             .addCase(login.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.status = true;
//                 state.successMessage = action.payload.message;
//                 state.errorMessage = "";
//             })
//             .addCase(login.rejected, (state, action) => {
//                 state.loading = false;
//                 state.status = false;
//                 state.errorMessage = action.error.message
//                 state.successMessage = "";
//             })

//             // logout
//             .addCase(logout.pending, (state) => {
//                 state.loading = true;
//                 state.successMessage = "";
//                 state.errorMessage = "";
//             })
//             .addCase(logout.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.status = false;
//                 state.userData = null;
//                 state.successMessage = action.payload.message;
//             })
//             .addCase(logout.rejected, (state, action) => {
//                 state.loading = false;
//                 state.successMessage = "";
//                 state.errorMessage = action.error.message;
//             })

//             // current user
//             .addCase(getCurrentUser.pending, (state) => {
//                 state.loading = true;
//                 state.successMessage = "";
//                 state.errorMessage = "";

//             })
//             .addCase(getCurrentUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.userData = action.payload;
//                 state.status = true;

//             })
//             .addCase(getCurrentUser.rejected, (state) => {
//                 state.loading = false;
//                 state.status = false;
//                 state.userData = null;
//             });
//     }
// });

// export default authSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosInstance";

interface UserData {
  _id: string;
  name: string;
  email: string;
  // Add other fields based on your API response
}

interface AuthState {
  loading: boolean;
  status: boolean;
  userData: UserData | null;
}

const initialState: AuthState = {
  loading: false,
  status: false,
  userData: null,
};

interface LoginPayload {
  email: string;
  password: string;
}

// firstName: "",
//     lastName: "",
//     email: "",
//     organization: "",
//     region: "India",
//     industry: "Capital Markets",
//     message: "",
interface userMessage {
  firstName: string
  lastName: string
  email: string
  organization?: string
  region?: string
  industry?: string
  message: string
}

export const login = createAsyncThunk<any, LoginPayload, { rejectValue: string }>(
  "/auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/login", userData);
      return response.data;
    } catch (error: any) {
      console.error("Login failed:", error);
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const logout = createAsyncThunk<any>("/users/auth/logout", async () => {
  try {
    const response = await axiosInstance.post("/users/logout");
    return response.data;
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
});

export const getCurrentUser = createAsyncThunk<UserData>("/auth/currentUser", async () => {
  try {
    const response = await axiosInstance.get("/users/current-user");
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    throw error;
  }
});

export const sendMessageToAdmin = createAsyncThunk<any, userMessage, { rejectValue: string }>(
  "auth/send-message",
  async (message, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.post("/users/send-contact", message)
      return response.data
    } catch (error) {
      console.log("Failed to send message to admin: ", error)
      return rejectWithValue("Failed to send message");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // login user 
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.status = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.status = false;
      })

      // logout user
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.status = false;
        state.userData = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
      })

      // get current user
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.loading = false;
        state.userData = action.payload;
        state.status = true;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.loading = false;
        state.status = false;
        state.userData = null;
      })

      // send message
      .addCase(sendMessageToAdmin.pending, (state) => {
        state.loading = true
      })
      .addCase(sendMessageToAdmin.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(sendMessageToAdmin.rejected, (state) => {
        state.loading = false
      })
  },
});

export default authSlice.reducer;
