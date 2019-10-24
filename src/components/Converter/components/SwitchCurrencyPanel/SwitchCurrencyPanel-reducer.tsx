import { fetchConvertedCurrencyDataRequest } from "./SwitchCurrencyPanel-action";
import { getType } from "typesafe-actions";
import { RootAction } from "../../../../redux/root-actions";
import { ConvertedCurrencyData } from "./SwitchCurrencyPanel-model";

interface State {
  isFetching: boolean;
  currencyConvertedData: ConvertedCurrencyData;
}

const initialState: State = {
  isFetching: false,
  currencyConvertedData: {}
};

export default (state: State = initialState, action: RootAction): State => {
  switch (action.type) {
    case getType(fetchConvertedCurrencyDataRequest.request): {
      return {
        ...state,
        isFetching: true
      };
    }
    case getType(fetchConvertedCurrencyDataRequest.success): {
      return {
        ...state,
        isFetching: false,
        currencyConvertedData: action.payload
      };
    }
    case getType(fetchConvertedCurrencyDataRequest.failure): {
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
