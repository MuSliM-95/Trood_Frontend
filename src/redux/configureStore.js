import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { criptoReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  criptoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
