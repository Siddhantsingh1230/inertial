import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signup, login, logout, getUser, verifyUser, resendOtp } from "../api/auth.js";
import { ERROR_STATUS, IDLE_STATUS, PENDING_STATUS } from "../lib/constants.js";
import Toasts from "../app/Toasts.js";

const initialState = {
  user: null,
  status: IDLE_STATUS,
};

export const signupAsync = createAsyncThunk(
  "auth/signup",
  async (userData, thunkAPI) => {
    try {
      const data = await signup(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const data = await login(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserAsync = createAsyncThunk(
  "auth/getUser",
  async (_, thunkAPI) => {
    try {
      const data = await getUser();
      return data;
    } catch (error) {
      const serializableError = {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      };
      return thunkAPI.rejectWithValue(serializableError);
    }
  }
);

export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const data = await logout();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const verifyUserAsync = createAsyncThunk(
  "auth/verifyuser",
  async (otpData, thunkAPI) => {
    try {
      const data = await verifyUser(otpData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resendOtpAsync = createAsyncThunk(
  "auth/resendOtp",
  async (emailData, thunkAPI) => {
    try {
      const data = await resendOtp(emailData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.pending, (state) => {
        state.status =PENDING_STATUS;
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = IDLE_STATUS;
        Toasts("success", action.payload.message);
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = ERROR_STATUS;
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          Toasts("error", action.payload.response.data.message || "Error Occurred");
        } else {
          Toasts("error","Network Error");
        }
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = PENDING_STATUS;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = IDLE_STATUS;
        state.user = action.payload.user;
        Toasts("success", action.payload.message);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = IDLE_STATUS;
        state.user = null;
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          Toasts("error", action.payload.response.data.message || "Error Occurred");
        } else {
          Toasts("error","Network Error");
        }
      })
      .addCase(getUserAsync.pending, (state) => {
        state.status = PENDING_STATUS;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = IDLE_STATUS;
        state.user = action.payload.user;
        // console.log("get user fulfilled");
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.status = ERROR_STATUS;
        state.user = null;
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          // console.log("getUser  error");
        } else {
          // Toasts("error","Network Error");
          // console.log("get user network error");
        }
      })
      .addCase(logoutAsync.pending, (state) => {
        state.status = PENDING_STATUS;
      })
      .addCase(logoutAsync.fulfilled, (state, action) => {
        state.status = IDLE_STATUS;
        state.user = null;
        Toasts("success", action.payload.message);
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.status = ERROR_STATUS;
        state.user = null;
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log("logout  error");
        } else {
          console.log("Network error");
        }
      }).addCase(verifyUserAsync.pending, (state) => {
        state.status =PENDING_STATUS;
      })
      .addCase(verifyUserAsync.fulfilled, (state, action) => {
        state.status = IDLE_STATUS;
        Toasts("success", action.payload.message);
      })
      .addCase(verifyUserAsync.rejected, (state, action) => {
        state.status = ERROR_STATUS;
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          Toasts("error", action.payload.response.data.message || "Error Occurred");
        } else {
          console.log("verify fulfilled");
        }
      }).addCase(resendOtpAsync.pending, (state) => {
        state.status =PENDING_STATUS;
      })
      .addCase(resendOtpAsync.fulfilled, (state, action) => {
        state.status = IDLE_STATUS;
        Toasts("success", action.payload.message);
      })
      .addCase(resendOtpAsync.rejected, (state, action) => {
        state.status = ERROR_STATUS;
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          Toasts("error", action.payload.response.data.message || "Error Occurred");
        } else {
          // console.log("verify fulfilled");
        }
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
