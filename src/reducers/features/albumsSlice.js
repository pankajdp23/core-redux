import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAlbums = createAsyncThunk("albums", async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/albums");
    console.log("data",data);
    return data;
})
export const albumsSlice = createSlice({
    name: "albums",
    initialState: {
        loading: false,
        data: [],
        error: false,
    },
    /*
    reducers: {
        addAlbumsLoading:(state) => {
            state.loading = true;
            state.error = false;
        },
        addAlbumsSuccess:(state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        addAlbumsError: (state) => {
            state.loading = false;
            state.error = true;
        },
    },*/
    extraReducers: {
        [getAlbums.pending] : (state) => {
            state.loading = true;
            state.error = false;
        },
        [getAlbums.fulfilled] : (state, action) => {
            state.loading = false;
            state.data =action.payload;
        },
        [getAlbums.rejected] : (state) => {
            state.loading = false;
            state.error = true;
        },
    }
});


export default albumsSlice.reducer;