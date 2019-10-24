import axios from "axios";
import { CurrencyData } from "./Converter-model";

export const getCurrencyDataFromDatabase = async (): Promise<CurrencyData> => {
  return await axios("https://api.exchangeratesapi.io/latest").then(res => res.data);
};