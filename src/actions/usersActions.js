import { ADD_USERS } from "../constants/constant";

export const addUsers = (users) => {
  return {
    type: ADD_USERS,
    payload: users,
  };
};
