import { SET_SESSION } from "../actions/types";

const session = (state = {}, action) => {
  switch (action.type) {
    case SET_SESSION:
      return action.session;
    default:
      return state;
  }
};

export default session;
