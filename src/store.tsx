import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { Store } from "redux";

const initialState = {};

const middleWare = [thunk];

const store: Store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleWare))
);

export default store;
