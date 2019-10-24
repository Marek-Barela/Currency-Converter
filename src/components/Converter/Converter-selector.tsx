import { RootState } from "../../redux/root-reducer";

export const getCurrencyData = (state: RootState) => {
  return state.currency.currencyData;
};
