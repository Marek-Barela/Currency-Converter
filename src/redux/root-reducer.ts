import { combineReducers } from "redux";
import { RootAction } from "./root-actions";
import currency from "../components/Converter/Converter-reducer";
import convertedCurrency from "../components/Converter/components/SwitchCurrencyPanel/SwitchCurrencyPanel-reducer";
import historicalData from "../components/HistoricalChart/components/DatePanel/DataPanel-reducer";

const reducerMap = {
  currency,
  convertedCurrency,
  historicalData
};

export type RootState = {
  [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);
