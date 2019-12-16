import { SET_SESSION } from "../actions/types";

interface SessionAction {
  type: typeof SET_SESSION;
  session: string;
}

const session = (state = "", action: SessionAction): string => {
  switch (action.type) {
    case SET_SESSION:
      return action.session;
    default:
      return state;
  }
};

export default session;
