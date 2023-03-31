import { ADD_USERS } from "../constants/constant";

function usersReducer (state= [], action) {
    switch (action.type) {
        case ADD_USERS:
            return action.payload;
        default:
            return state;
    }
}

export default usersReducer;