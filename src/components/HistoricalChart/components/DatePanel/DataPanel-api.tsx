import axios from "axios";
import { HistoricalData } from "./DataPanel-model";

export const getCurrencyDataFromDatabase = async (payload: {
  currencyFrom: string;
  currencyTo: string;
  dateFrom: string;
  dateTo: string;
}): Promise<HistoricalData> => {
  const { currencyFrom, currencyTo, dateFrom, dateTo } = payload;
  return await axios(
    `https://api.exchangeratesapi.io/history?start_at=${dateFrom}&end_at=${dateTo}&symbols=${currencyTo}&base=${currencyFrom}`
  ).then(res => res.data);
};
