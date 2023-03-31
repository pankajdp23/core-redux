import { ADD_POSTS } from "../constants/constant";

export const addPosts = (posts) => {
  // action creator function
  return {
    type: ADD_POSTS,
    payload: posts,
  };
};
