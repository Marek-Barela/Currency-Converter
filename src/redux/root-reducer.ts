import { combineReducers } from "redux";
import { RootAction } from "./root-actions";
import defaultReducer from "../components/App/App-reducer";

const reducerMap = {
  defaultReducer
};

export type RootState = {
  [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);
