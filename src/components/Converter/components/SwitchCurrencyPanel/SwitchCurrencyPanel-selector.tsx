import { RootState } from "../../../../redux/root-reducer";

export const getConvertedCurrencyData = (state: RootState) => {
  return state.convertedCurrency.currencyConvertedData;
};
