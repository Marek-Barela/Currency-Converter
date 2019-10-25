import axios from "axios";
import { ConvertedCurrencyData } from "./SwitchCurrencyPanel-model";

export const getConvertedCurrencyData = async (currency: {
  currencyFrom: string;
  currencyTo: string;
}): Promise<ConvertedCurrencyData> => {
  const { currencyFrom, currencyTo } = currency;
  return await axios(`https://api.exchangeratesapi.io/latest?symbols=${currencyTo}&base=${currencyFrom}`)
    .then(res => res.data);
};
