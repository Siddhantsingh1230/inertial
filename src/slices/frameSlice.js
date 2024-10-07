import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ERROR_STATUS, IDLE_STATUS, PENDING_STATUS } from "../lib/constants.js";
import { createFrame } from "../api/frame.js";

const initialState = {
  frame: null,
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
          console.log("frame creation fulfilled");
        })
        .addCase(createFrameAsync.rejected, (state, action) => {
          state.status = ERROR_STATUS;
          if (action.payload.response && action.payload.code !== "ERR_NETWORK") {
            console.log("frame creation error");
          } else {
            console.log("frame creation network error");
          }
        });
    },
  });
  
  export const {} = frameSlice.actions;
  export default frameSlice.reducer;

