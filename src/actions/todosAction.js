import axios from "axios";
import {
  ADD_TODOS_FAILURE,
  ADD_TODOS_LOADING,
  ADD_TODOS_SUCCESS,
} from "../constants/constant";

export const startAddTodos = () => {
  return async (dispatch) => {
    try {
      dispatch(addTodosLoading());
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(data);
      dispatch(addTodosSuccess(data));
    } catch (error) {
      dispatch(addTodosFailure());
    }
  };
};

export const addTodosLoading = () => {
  return {
    type: ADD_TODOS_LOADING,
  };
};

export const addTodosSuccess = (todos) => {
  return {
    type: ADD_TODOS_SUCCESS,
    payload: todos,
  };
};

export const addTodosFailure = () => {
  return {
    type: ADD_TODOS_FAILURE,
  };
};
