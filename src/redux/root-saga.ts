import { fork } from "redux-saga/effects";
import currency from "../components/Converter/Converter-saga";

export default function* rootSaga() {
  yield fork(currency);
}
