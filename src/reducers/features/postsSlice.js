import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// immerjs

export const getPosts = createAsyncThunk("users/posts", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("data", data);
  return data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    error: false,
    data: [],
  },
  /* reducers: {
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
  },*/
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

//export const { addPostsLoading, addPostsSuccess, addPostsError } = postSlice.actions;

export default postSlice.reducer;
