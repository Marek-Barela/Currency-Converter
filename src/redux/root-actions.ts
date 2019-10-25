import { Dispatch as ReduxDispatch } from "redux";
import { ActionType } from "typesafe-actions";
import * as currency from "../components/Converter/Converter-actions";
import * as convertedCurrency from "../components/Converter/components/SwitchCurrencyPanel/SwitchCurrencyPanel-action";

export const actions = {
  currency,
  convertedCurrency
};

export type RootAction = ActionType<typeof actions>;
export type Dispatch = ReduxDispatch<RootAction>;
