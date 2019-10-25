import { Dispatch as ReduxDispatch } from "redux";
import { ActionType } from "typesafe-actions";
import * as currency from "../components/Converter/Converter-actions";
import * as convertedCurrency from "../components/Converter/components/SwitchCurrencyPanel/SwitchCurrencyPanel-action";
import * as historicalData from "../components/HistoricalChart/components/DatePanel/DataPanel-actions";

export const actions = {
  currency,
  convertedCurrency,
  historicalData
};

export type RootAction = ActionType<typeof actions>;
export type Dispatch = ReduxDispatch<RootAction>;
