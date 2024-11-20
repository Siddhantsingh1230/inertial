import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice.js";
import frameReducer from "../slices/frameSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    frame:frameReducer,
  },
});
