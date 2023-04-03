import {
  ADD_ALBUMS_LOADING,
  ADD_ALBUMS_SUCCESS,
  ADD_ALBUMS_FAILURE,
} from "../constants/constant";

const initialState = {
  loading: false,
  error: "",
  data: [],
};

function albumsReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_ALBUMS_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case ADD_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.albums,
      };
    case ADD_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Something went wrong. Try again later",
      };
    default:
      return state;
  }
}
export default albumsReducers;
