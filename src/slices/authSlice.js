import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signup, login, logout, getUser } from "../api/auth.js";
import { ERROR_STATUS, IDLE_STATUS, PENDING_STATUS } from "../lib/constants.js";

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
      console.log("entered loginAsync");
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
      return thunkAPI.rejectWithValue(error);
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
        console.log("signup fulfilled");
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = ERROR_STATUS;
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log("signup fulfilled");
        } else {
          console.log("signup fulfilled");
        }
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = PENDING_STATUS;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = IDLE_STATUS;
        state.user = action.payload.user;
        console.log("login fulfilled");
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = IDLE_STATUS;
        state.user = null;
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log("login error");
        } else {
          console.log("login network error");
        }
      })
      .addCase(getUserAsync.pending, (state) => {
        state.status = PENDING_STATUS;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = IDLE_STATUS;
        state.user = action.payload.user;
        console.log("get user fulfilled");
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.status = ERROR_STATUS;
        state.user = null;
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log("getUser  error");
        } else {
          console.log("get user network error");
        }
      })
      .addCase(logoutAsync.pending, (state) => {
        state.status = PENDING_STATUS;
      })
      .addCase(logoutAsync.fulfilled, (state, action) => {
        state.status = IDLE_STATUS;
        state.user = null;
        console.log("logout fulfilled");
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.status = ERROR_STATUS;
        state.user = null;
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log("logout  error");
        } else {
          console.log("logout network error");
        }
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
