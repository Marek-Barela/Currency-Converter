import { combineReducers } from "redux";
import { RootAction } from "./root-actions";

const reducerMap = {};

export type RootState = {
  [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);
