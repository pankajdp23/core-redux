import { ADD_NUMBER, SUBTRACT_NUMBER } from "../constants/constant";

export const addNumber = (incrementBy) => {
  // action creator function
  return {
    type: ADD_NUMBER,
    payload: incrementBy,
  };
};

export const subtractNumber = () => {
  // action creator function
  return {
    type: SUBTRACT_NUMBER,
  };
};
