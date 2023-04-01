import { ADD_ALBUMS } from "../constants/constant";

function albumsReducers (state = [], action) {
    switch (action.type) {
        case ADD_ALBUMS:
            return action.payload;
        default:
            return state; 
    }
}
 export default albumsReducers;