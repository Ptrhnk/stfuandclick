import { FETCH_DATA } from "../actions/types";
import { Leader } from "../common/types";

interface LeaderAction {
  type: typeof FETCH_DATA;
  payload: Leader[];
}

const leaders = (state = [{}], action: LeaderAction): Array<object> => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default leaders;
