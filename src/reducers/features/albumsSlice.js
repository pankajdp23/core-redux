import { createSlice } from "@reduxjs/toolkit";

export const albumsSlice = createSlice({
    name: "albums",
    initialState: {
        loading: false,
        data: [],
        error: false,
    },
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
    },
});

export const {addAlbumsLoading, addAlbumsSuccess, addAlbumsError} = albumsSlice.actions;
export default albumsSlice.reducer;