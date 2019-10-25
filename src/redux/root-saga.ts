import { fork } from "redux-saga/effects";
import currency from "../components/Converter/Converter-saga";
import convertedCurrency from "../components/Converter/components/SwitchCurrencyPanel/SwitchCurrencyPanel-saga";

export default function* rootSaga() {
  yield fork(currency);
  yield fork(convertedCurrency);
}
