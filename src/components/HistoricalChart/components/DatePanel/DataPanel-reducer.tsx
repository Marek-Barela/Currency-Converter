import { fetchHistoricalCurrencyDataRequest } from "./DataPanel-actions";
import { getType } from "typesafe-actions";
import { RootAction } from "../../../../redux/root-actions";
import { HistoricalData } from "./DataPanel-model";

interface State {
  isFetching: boolean;
  historicalCurrencyData: HistoricalData;
  dateFrom: string;
  dateTo: string;
}

const initialState: State = {
  isFetching: false,
  historicalCurrencyData: {},
  dateFrom: "",
  dateTo: ""
};

export default (state: State = initialState, action: RootAction): State => {
  switch (action.type) {
    case getType(fetchHistoricalCurrencyDataRequest.request): {
      return {
        ...state,
        isFetching: true
      };
    }
    case getType(fetchHistoricalCurrencyDataRequest.success): {
      return {
        ...state,
        isFetching: false,
        historicalCurrencyData: action.payload
      };
    }
    case getType(fetchHistoricalCurrencyDataRequest.failure): {
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
