import { fork } from "redux-saga/effects";
import currency from "../components/Converter/Converter-saga";
import convertedCurrency from "../components/Converter/components/SwitchCurrencyPanel/SwitchCurrencyPanel-saga";
import historicalData from "../components/HistoricalChart/components/DatePanel/DataPanel-saga";

export default function* rootSaga() {
  yield fork(currency);
  yield fork(convertedCurrency);
  yield fork(historicalData);
}
