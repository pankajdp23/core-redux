import axios from "axios";
import {
  ADD_POSTS_LOADING,
  ADD_POSTS_SUCCESS,
  ADD_POSTS_FAILURE,
} from "../constants/constant";

export const startAddPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(addPostsLoading());
      const { data: response } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log({ response });
      dispatch(addPostsSuccess(response));
    } catch (error) {
      console.log(error);
      dispatch(addPostsError());
    }
  };
};

export const addPostsLoading = () => {
  // action creator function
  return {
    type: ADD_POSTS_LOADING,
  };
};

export const addPostsSuccess = (posts) => {
  // action creator function
  return {
    type: ADD_POSTS_SUCCESS,
    payload: posts,
  };
};

export const addPostsError = () => {
  // action creator function
  return {
    type: ADD_POSTS_FAILURE,
  };
};
