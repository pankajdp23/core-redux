import { ADD_TODOS } from "../constants/constant"

export const addTodos = (todos) => {
    return {
        type: ADD_TODOS,
        payload: todos,
    }
}