import { WEATHER } from "../constants";

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case WEATHER.LOAD_SUCCESS:
      return [...state, ...action.data];
    default:
      return state;
  }
};

export default weatherReducer;
