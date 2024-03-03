import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
  },
});
