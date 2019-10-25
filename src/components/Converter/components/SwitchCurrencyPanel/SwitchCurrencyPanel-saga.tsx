import * as api from "./SwitchCurrencyPanel-api";
import {
  fetchConvertedCurrencyData,
  fetchConvertedCurrencyDataRequest
} from "./SwitchCurrencyPanel-action";
import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { ConvertedCurrencyData } from "./SwitchCurrencyPanel-model";

export function* handleFetchConvertedCurrencyData() {
  const getState = yield select();
  const { currency } = getState;
  try {
    yield put(fetchConvertedCurrencyDataRequest.request());
    const response: ConvertedCurrencyData = yield call(
      api.getConvertedCurrencyData,
      currency
    );
    yield put(fetchConvertedCurrencyDataRequest.success(response));
  } catch (err) {
    yield put(fetchConvertedCurrencyDataRequest.failure(err));
  }
}

export default function*() {
  yield all([
    takeLatest(
      getType(fetchConvertedCurrencyData),
      handleFetchConvertedCurrencyData
    )
  ]);
}
