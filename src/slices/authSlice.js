import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signup, login, logout, getUser } from "../api/auth.js";

const initialState = {
  user: null,
  status: "idle",
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
        state.status = "pending";
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log("signup fulfilled");
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = "idle";
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log("signup fulfilled");
        } else {
          console.log("signup fulfilled");
        }
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload.user;
        console.log("login fulfilled");
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "idle";
        state.user = null;
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log("login error");
        } else {
          console.log("login network error");
        }
      })
      .addCase(getUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload.user;
        console.log("get user fulfilled");
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.user = null;
        if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
          console.log("getUser  error");
        } else {
          console.log("get user network error");
        }
      })
      .addCase(logoutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = null;
        console.log("logout fulfilled");
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
