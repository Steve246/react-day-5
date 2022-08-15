import { hookReducer } from "./redux/hookReducer";

const { combineReducers, createStore } = require("redux");

const rootReducer = combineReducers({
  hookReducer,
});

export const setupStore = () => {
  return createStore(rootReducer);
};
