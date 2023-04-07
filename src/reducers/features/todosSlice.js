import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// immerjs
export const getTodos = createAsyncThunk("todos", async () => {
  const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
  console.log("data",data);
  return data;
})

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    error: false,
    data: [],
  },
  /*
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
  */
  extraReducers: {
    [getTodos.pending] : (state) => {
        state.loading = true;
        state.error = false;
    },
    [getTodos.fulfilled] : (state, action) => {
        state.loading = false;
        state.data =action.payload;
    },
    [getTodos.rejected] : (state) => {
        state.loading = false;
        state.error = true;
    },
}
});

export default todosSlice.reducer;