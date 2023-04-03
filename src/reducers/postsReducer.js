import {
  ADD_POSTS_LOADING,
  ADD_POSTS_SUCCESS,
  ADD_POSTS_FAILURE,
} from "../constants/constant";

const initialState = {
  loading: false,
  error: "",
  data: [],
};
function postsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POSTS_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case ADD_POSTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ADD_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Something went wrong. Try again later.",
      };
    default:
      return state;
  }
}

export default postsReducer;
