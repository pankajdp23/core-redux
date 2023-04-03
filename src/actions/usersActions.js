import axios from "axios";
import {
  ADD_USERS_LOADING,
  ADD_USERS_FAILURE,
  ADD_USERS_SUCCESS,
} from "../constants/constant";

export const startAddUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(addUsersLoading());
      const { data: response } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log({ response });
      dispatch(addUsersSuccess(response));
    } catch (error) {
      console.log(error);
      dispatch(addUsersError());
    }
  };
};

export const addUsersLoading = () => {
  // action creator function
  return {
    type: ADD_USERS_LOADING,
  };
};

export const addUsersSuccess = (users) => {
  // action creator function
  return {
    type: ADD_USERS_SUCCESS,
    payload: users,
  };
};

export const addUsersError = () => {
  // action creator function
  return {
    type: ADD_USERS_FAILURE,
  };
};
