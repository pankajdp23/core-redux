import { createSlice } from "@reduxjs/toolkit";

// immerjs

const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    error: false,
    data: [],
  },
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
});

export const { addUsersLoading, addUsersSuccess, addUsersError } =
  userSlice.actions;

export default userSlice.reducer;