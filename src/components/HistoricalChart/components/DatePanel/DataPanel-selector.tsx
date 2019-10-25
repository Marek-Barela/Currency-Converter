import { RootState } from "../../../../redux/root-reducer";

export const getHistoricalData = (state: RootState) => {
  return state.historicalData.historicalCurrencyData;
};
