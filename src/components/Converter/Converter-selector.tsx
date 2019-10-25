import { RootState } from "../../redux/root-reducer";

export const getCurrencyData = (state: RootState) => {
  return state.currency.currencyData;
};

export const getCurrencyFromValue = (state: RootState) => {
  return state.currency.currencyFrom;
};

export const getCurrencyToValue = (state: RootState) => {
  return state.currency.currencyTo;
};
