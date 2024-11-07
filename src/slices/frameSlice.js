import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ERROR_STATUS, IDLE_STATUS, PENDING_STATUS } from "../lib/constants.js";
import { createFrame, getAllFrames, getAllFramesByUserId } from "../api/frame.js";
import Toasts from "../app/Toasts.js";

const initialState = {
  allFrames: [],
  userFrames: [],
  status: IDLE_STATUS,
};

export const createFrameAsync = createAsyncThunk(
  "frame/create",
  async (frameData, thunkAPI) => {
    try {
      const data = await createFrame(frameData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllFramesAsync = createAsyncThunk(
  "frame/all",
  async (_, thunkAPI) => {
    try {
      const data = await getAllFrames();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllFramesByUserIdAsync = createAsyncThunk(
  "frame/framesById",
  async (userId, thunkAPI) => {
    try {
      const data = await getAllFramesByUserId(userId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const frameSlice = createSlice({
    name: "frame",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createFrameAsync.pending, (state) => {
          state.status =PENDING_STATUS;
        })
        .addCase(createFrameAsync.fulfilled, (state, action) => {
          state.status = IDLE_STATUS;
          // console.log("frame creation fulfilled");
          Toasts("success", action.payload.message);
        })
        .addCase(createFrameAsync.rejected, (state, action) => {
          state.status = ERROR_STATUS;
          if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
            // console.log("frame creation error");
          } else {
            // console.log("frame creation network error");
          }
        }).addCase(getAllFramesAsync.pending, (state) => {
          state.status =PENDING_STATUS;
        })
        .addCase(getAllFramesAsync.fulfilled, (state, action) => {
          state.status = IDLE_STATUS;
          state.allFrames = action.payload.frames;
          // console.log("frame creation fulfilled");
        })
        .addCase(getAllFramesAsync.rejected, (state, action) => {
          state.status = ERROR_STATUS;
          if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
            // console.log("frame creation error");
          } else {
            // console.log("frame creation network error");
          }
        }).addCase(getAllFramesByUserIdAsync.pending, (state) => {
          state.status =PENDING_STATUS;
        })
        .addCase(getAllFramesByUserIdAsync.fulfilled, (state, action) => {
          state.status = IDLE_STATUS;
          state.userFrames = action.payload.frames;
          // console.log("frame creation fulfilled");
        })
        .addCase(getAllFramesByUserIdAsync.rejected, (state, action) => {
          state.status = ERROR_STATUS;
          if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
            // console.log("frame creation error");
          } else {
            // console.log("frame creation network error");
          }
        });
    },
  });
  
  export const {} = frameSlice.actions;
  export default frameSlice.reducer;

