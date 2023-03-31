import { ADD_POSTS } from "../constants/constant";


function postsReducer (state= [], action) {
    switch (action.type) {
        case ADD_POSTS:
            return action.payload;
        default:
            return state;
    }
}

export default postsReducer;