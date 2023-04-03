import axios from "axios";
import {
  ADD_ALBUMS,
  ADD_ALBUMS_FAILURE,
  ADD_ALBUMS_LOADING,
  ADD_ALBUMS_SUCCESS,
} from "../constants/constant";

export const addAlbumsLoading = () => {
  return {
    type: ADD_ALBUMS_LOADING,
  };
};

export const addAlbumsSuccess = (albums) => {
  return {
    type: ADD_ALBUMS_SUCCESS,
    albums,
  };
};

export const addAlbumsFailure = () => {
  return {
    type: ADD_ALBUMS_FAILURE,
  };
};

export const startAddAlbums = () => {
  return async function (dispatch) {
    try {
      dispatch(addAlbumsLoading());
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      dispatch(addAlbumsSuccess(data));
    } catch (error) {
      dispatch(addAlbumsFailure());
    }
  };
};
