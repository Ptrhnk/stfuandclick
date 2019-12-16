import { INCREMENT } from "../actions/types";
import { Clicks } from "../common/types";

interface ClickAction {
  type: typeof INCREMENT;
  payload: Clicks;
}

const clicks = (state = {}, action: ClickAction): object => {
  switch (action.type) {
    case INCREMENT:
      return action.payload;
    default:
      return state;
  }
};

export default clicks;
