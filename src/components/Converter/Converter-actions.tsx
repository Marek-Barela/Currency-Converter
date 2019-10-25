import { createAction, createAsyncAction } from "typesafe-actions";
import { CurrencyData } from "./Converter-model";

export const fetchCurrencyData = createAction("currency/GET_CURRENCY_DATA");

export const fetchCurrencyDataRequest = createAsyncAction(
  "currency/GET_CURRENCY_DATA_REQUESTED",
  "currency/GET_CURRENCY_DATA_SUCCEEDED",
  "currency/GET_CURRENCY_DATA_FAILED"
)<undefined, CurrencyData, Error>();

export const setFromCurrencyConversion = createAction("currency/SET_FROM_CURRENCY_CONVERSION", action => {
  return (payload: string) => action(payload);
});

export const setToCurrencyConversion = createAction("currency/SET_TO_CURRENCY_CONVERSION", action => {
  return (payload: string) => action(payload);
});