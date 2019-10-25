import * as api from "./DataPanel-api";
import {
  fetchHistoricalCurrencyData,
  fetchHistoricalCurrencyDataRequest
} from "./DataPanel-actions";
import { all, call, put, takeLatest, select, Effect } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { HistoricalData } from "./DataPanel-model";

export function* handleFetchHistoricalCurrencyData(action: Effect) {

 const { dateFrom, dateTo } = action.payload;
 const state = yield select()
 const { currencyFrom, currencyTo } = state.currency;
 const payload = { dateFrom, dateTo, currencyFrom, currencyTo };

  try {
    yield put(fetchHistoricalCurrencyDataRequest.request());
    const response: HistoricalData = yield call(api.getCurrencyDataFromDatabase, payload);
    yield put(fetchHistoricalCurrencyDataRequest.success(response));
  } catch (err) {
    yield put(fetchHistoricalCurrencyDataRequest.failure(err));
  }
}

export default function*() {
  yield all([takeLatest(getType(fetchHistoricalCurrencyData), handleFetchHistoricalCurrencyData)]);
}
