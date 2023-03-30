import { ADD_NUMBER, SUBTRACT_NUMBER } from "../constants/constant";

function postsReducer(state = [], action) {
  switch (action.type) {
    case ADD_POSTS:
      return action.payload;
    case SUBTRACT_NUMBER:
      return state - 1;
    default:
      return state;
  }
}

export default postsReducer;
