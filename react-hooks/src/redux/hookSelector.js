import { hookReducer } from "./hookReducer";

export const hookSelector = (state) => {
  return state.hookReducer.number;
};
