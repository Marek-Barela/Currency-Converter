import { createAction, createAsyncAction } from "typesafe-actions";
import { HistoricalData } from "./DataPanel-model";
import { PeriodOfTime } from "./DataPanel-model";

export const fetchHistoricalCurrencyData = createAction(
  "history/GET_HISTORICAL_CURRENCY_DATA",
  action => {
    return (payload: PeriodOfTime) => action(payload);
  }
);

export const fetchHistoricalCurrencyDataRequest = createAsyncAction(
  "history/GET_HISTORICAL_CURRENCY_DATA_REQUESTED",
  "history/GET_HISTORICAL_CURRENCY_DATA_SUCCEEDED",
  "history/GET_HISTORICAL_CURRENCY_DATA_FAILED"
)<undefined, HistoricalData, Error>();
