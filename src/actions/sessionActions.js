import { SET_SESSION } from "./types";

export const setSession = session => dispatch => {
  dispatch({
    type: SET_SESSION,
    session
  });
};
