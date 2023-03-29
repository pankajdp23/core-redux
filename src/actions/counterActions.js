import { ADD_NUMBER, SUBTRACT_NUMBER } from "../constants/constant";

export const addNumber = () => {
  // action creator function
  return {
    type: ADD_NUMBER,
  };
};

export const subtractNumber = () => {
  // action creator function
  return {
    type: SUBTRACT_NUMBER,
  };
};
