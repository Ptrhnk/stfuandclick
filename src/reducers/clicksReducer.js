import { INCREMENT } from "../actions/types";

const clicks = (state = {}, action) => {
  switch (action.type) {
    case INCREMENT:
      return action.payload;
    default:
      return state;
  }
};

export default clicks;
