import { createSlice } from "@reduxjs/toolkit";

// immerjs

const postSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    error: false,
    data: [],
  },
  reducers: {
    addPostsLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    addPostsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    addPostsError: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { addPostsLoading, addPostsSuccess, addPostsError } =
  postSlice.actions;

export default postSlice.reducer;
