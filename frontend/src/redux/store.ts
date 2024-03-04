// store.ts
import { configureStore } from "@reduxjs/toolkit";
import loadingReducer, { LoadingState } from "./loadingSlice";

// Define the root state type
export interface RootState {
  loading: LoadingState;
}

// Create the Redux store
export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});
