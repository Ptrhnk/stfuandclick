import { INCREMENT } from "./types";
import { incrementCountAsync } from "../lib/getLeaders";

export const increment = (team, session) => dispatch => {
  incrementCountAsync(team, session).then(clicks =>
    dispatch({
      type: INCREMENT,
      payload: clicks
    })
  );
};
