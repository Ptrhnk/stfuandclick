import { combineReducers } from "redux";
import leaders from "./leaderReducer";
import clicks from "./clicksReducer";
import session from "./sessionReducer";

const rootReducer = combineReducers({
  leaders,
  clicks,
  session
});

export default rootReducer;
