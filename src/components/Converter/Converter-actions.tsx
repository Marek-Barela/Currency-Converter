import { createAction, createAsyncAction } from "typesafe-actions";
import { CurrencyData } from "./Converter-model";

export const fetchCurrencyData = createAction("currency/GET_CURRENCY_DATA");

export const fetchCurrencyDataRequest = createAsyncAction(
  "currency/GET_CURRENCY_DATA_REQUESTED",
  "currency/GET_CURRENCY_DATA_SUCCEEDED",
  "currency/GET_CURRENCY_DATA_FAILED"
)<undefined, CurrencyData, Error>();
