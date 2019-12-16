import { FETCH_DATA } from "./types";
import { getLeadersAsync } from "../lib/getLeaders";

export const fetchData = () => dispatch => {
  getLeadersAsync().then(data =>
    dispatch({
      type: FETCH_DATA,
      payload: data
    })
  );
};
