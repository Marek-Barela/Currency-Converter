import { createAction, createAsyncAction } from "typesafe-actions";
import { ConvertedCurrencyData } from "./SwitchCurrencyPanel-model";

export const fetchConvertedCurrencyData = createAction(
  "currency/GET_CONVERTED_CURRENCY_DATA"
);

export const fetchConvertedCurrencyDataRequest = createAsyncAction(
  "currency/GET_CONVERTED_CURRENCY_DATA_REQUESTED",
  "currency/GET_CONVERTED_CURRENCY_DATA_SUCCEEDED",
  "currency/GET_CONVERTED_CURRENCY_DATA_FAILED"
)<undefined, ConvertedCurrencyData, Error>();
