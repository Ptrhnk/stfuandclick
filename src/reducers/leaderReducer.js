import { FETCH_DATA } from "../actions/types";

const leaders = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default leaders;
