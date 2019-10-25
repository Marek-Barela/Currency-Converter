import * as api from "./Converter-api";
import { fetchCurrencyData, fetchCurrencyDataRequest } from "./Converter-actions";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { CurrencyData } from "./Converter-model";

export function* handleFetchCurrencyData() {
  try {
    yield put(fetchCurrencyDataRequest.request());
    const response: CurrencyData = yield call(api.getCurrencyDataFromDatabase);
    yield put(fetchCurrencyDataRequest.success(response));
  } catch (err) {
    yield put(fetchCurrencyDataRequest.failure(err));
  }
}

export default function*() {
  yield all([takeLatest(getType(fetchCurrencyData), handleFetchCurrencyData)]);
}