import { INCREMENT } from "./types";
import { Dispatch } from "redux";
import { incrementCountAsync } from "../lib/getLeaders";

export const increment = (team: string, session: string) => (
  dispatch: Dispatch
) => {
  incrementCountAsync(team, session).then(clicks =>
    dispatch({
      type: INCREMENT,
      payload: clicks
    })
  );
};
