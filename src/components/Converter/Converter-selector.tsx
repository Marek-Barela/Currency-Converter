import { RootState } from "../../redux/root-reducer";
import { CurrencyData } from "./Converter-model";

export const getCurrencyData = (state: RootState): CurrencyData => {
  return state.currency.currencyData;
};

export const getCurrencyFromValue = (state: RootState): string => {
  return state.currency.currencyFrom;
};

export const getCurrencyToValue = (state: RootState): string => {
  return state.currency.currencyTo;
};
