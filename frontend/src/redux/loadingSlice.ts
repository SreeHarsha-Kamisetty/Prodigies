import { createSlice } from "@reduxjs/toolkit";

const initialState = { loading: false };

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loadingTF: (state, actions) => {
      state.loading = actions.payload;
    },
  },
});

export const { loadingTF } = loadingSlice.actions;
export default loadingSlice.reducer;
