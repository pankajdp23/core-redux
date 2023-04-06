import { createSlice } from "@reduxjs/toolkit";

// immerjs

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    error: false,
    data: [],
  },
  reducers: {
    addTodosLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    addTodosSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    addTodosError: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { addTodosLoading, addTodosSuccess, addTodosError } =
todosSlice.actions;

export default todosSlice.reducer;