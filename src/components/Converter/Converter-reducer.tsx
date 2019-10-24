import {
  fetchCurrencyDataRequest,
  setFromCurrencyConversion,
  setToCurrencyConversion
} from "./Converter-actions";
import { getType } from "typesafe-actions";
import { RootAction } from "../../redux/root-actions";
import { CurrencyData } from "./Converter-model";

interface State {
  isFetching: boolean;
  currencyData: CurrencyData;
  currencyFrom: string;
  currencyTo: string;
}

const initialState: State = {
  isFetching: false,
  currencyData: {},
  currencyFrom: "",
  currencyTo: ""
};

export default (state: State = initialState, action: RootAction): State => {
  switch (action.type) {
    case getType(fetchCurrencyDataRequest.request): {
      return {
        ...state,
        isFetching: true
      };
    }
    case getType(fetchCurrencyDataRequest.success): {
      return {
        ...state,
        isFetching: false,
        currencyData: action.payload
      };
    }
    case getType(fetchCurrencyDataRequest.failure): {
      return {
        ...state,
        isFetching: false
      };
    }
    case getType(setFromCurrencyConversion): {
      return {
        ...state,
        currencyFrom: action.payload
      };
    }
    case getType(setToCurrencyConversion): {
      return {
        ...state,
        currencyTo: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
