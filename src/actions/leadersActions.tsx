import { FETCH_DATA } from "./types";
import { getLeadersAsync } from "../lib/getLeaders";
import { Dispatch } from "redux";

export const fetchData = () => (dispatch: Dispatch) => {
  getLeadersAsync().then(data =>
    dispatch({
      type: FETCH_DATA,
      payload: data
    })
  );
};
