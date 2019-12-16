import axios from "axios";

const api = axios.create({
  baseURL: "https://klikuj.herokuapp.com/api/v1",
  timeout: 5000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});

const getLeadersAsync = async () => {
  try {
    const response = await api.get("/leaderboard");
    return await response.data;
  } catch (err) {
    throw err;
  }
};

const incrementCountAsync = async (team, session) => {
  try {
    const response = await api.post("/klik", { team, session });
    return await response.data;
  } catch (err) {
    throw err;
  }
};

export { getLeadersAsync, incrementCountAsync };
