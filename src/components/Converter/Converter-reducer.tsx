import { fetchCurrencyDataRequest } from "./Converter-actions";
import { getType } from "typesafe-actions";
import { RootAction } from "../../redux/root-actions";
import { CurrencyData } from "./Converter-model";

interface State {
  isFetching: boolean;
  currencyData: CurrencyData;
}

const initialState: State = {
  isFetching: false,
  currencyData: {}
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
    default: {
      return {
        ...state
      };
    }
  }
};
