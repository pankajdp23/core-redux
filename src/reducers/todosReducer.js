import { ADD_TODOS_FAILURE, ADD_TODOS_LOADING, ADD_TODOS_SUCCESS } from "../constants/constant";


const initialState = {
    loading: false,
    error: '',
    data: []
}

 const todosReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_TODOS_LOADING:
            return {
                ...state,
                loading: true,
                error:"",
            };
        case ADD_TODOS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case ADD_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: "Something went wrong. Please try again",
            };
        default:
            return state;
    }
}

export default todosReducer;