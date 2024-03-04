// loadingSlice.ts
import { createSlice } from "@reduxjs/toolkit";

// Define the type for the loading state
export interface LoadingState {
  loading: boolean;
}

// Define the initial state
const initialState: LoadingState = { loading: false };

// Create the loading slice
export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    // Define the action to toggle loading state
    loadingTF: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Export the action creator
export const { loadingTF } = loadingSlice.actions;

// Export the reducer
export default loadingSlice.reducer;
