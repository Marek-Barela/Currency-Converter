import { combineReducers } from "redux";
import { RootAction } from "./root-actions";
import defaultReducer from "../components/App/App-reducer";
import currency from "../components/Converter/Converter-reducer";
import convertedCurrency from "../components/Converter/components/SwitchCurrencyPanel/SwitchCurrencyPanel-reducer";

const reducerMap = {
  defaultReducer,
  currency,
  convertedCurrency
};

export type RootState = {
  [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);
