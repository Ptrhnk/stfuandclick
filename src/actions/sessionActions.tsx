import { SET_SESSION } from "./types";
import { Dispatch } from "redux";

export const setSession = (session: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_SESSION,
    session
  });
};
