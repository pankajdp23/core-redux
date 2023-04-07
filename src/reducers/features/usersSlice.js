import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// immerjs

export const getUsers = createAsyncThunk("users", async () => {
  const { data} = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(data);
  return data;
})

const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    error: false,
    data: [],
  },
  /*
  reducers: {
    addUsersLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    addUsersSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    addUsersError: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
  */
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
      state.error=false;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.data= action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.loading=false;
      state.error =true;
    }
  }
});

export default userSlice.reducer;