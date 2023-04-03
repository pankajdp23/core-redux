import {
    ADD_USERS_LOADING,
    ADD_USERS_SUCCESS,
    ADD_USERS_FAILURE,
  } from "../constants/constant";
  
  const initialState = {
    loading: false,
    error: "",
    data: [],
  };

function usersReducer (state= initialState, action) {
    switch (action.type) {
        case ADD_USERS_LOADING:
          return {
            ...state,
            loading: true,
            error: "",
          };
        case ADD_USERS_SUCCESS:
          return {
            ...state,
            data: action.payload,
            loading: false,
          };
        case ADD_USERS_FAILURE:
          return {
            ...state,
            loading: false,
            error: "Something went wrong. Try again later.",
          };
        default:
          return state;
      }
}

export default usersReducer;