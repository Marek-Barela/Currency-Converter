import React, { useState, useEffect, ChangeEvent, FC } from "react";
import { getConvertedCurrencyData } from "../SwitchCurrencyPanel/SwitchCurrencyPanel-selector";
import { ConvertedCurrencyData } from "../SwitchCurrencyPanel/SwitchCurrencyPanel-model";
import { getCurrencyFromValue, getCurrencyToValue } from "../../Converter-selector";
import { connect } from "react-redux";
import { RootState } from "../../../../redux/root-reducer";
import { getTotalValueAsPrice } from "../../../../utils/getTotalValueAsPrice";
import styles from "./PricePanel.module.css";

interface StateProps {
  convertedCurrencyData: ConvertedCurrencyData;
  currencyFrom: string;
  currencyTo: string;
}

type Props = StateProps;

const PricePanel: FC<Props> = ({ convertedCurrencyData, currencyFrom, currencyTo }) => {
  const [amount, setAmount] = useState(localStorage.getItem("amount") || "");
  const [totalCurrencyValue, setTotalCurrencyValue] = useState("");

  /**
   * Every time when user will change currency
   * update actual calculation 
   */
  useEffect(() => {
    if(convertedCurrencyData.rates) {
      getTotalCurrencyValue(Number(amount))
    }
  }, [convertedCurrencyData.rates])

  const getTotalCurrencyValue = (value:number) => {
    // { USD: 11.234 } => [ 11.234 ]
    const actualCurrencyValue: any = Object.values(convertedCurrencyData.rates)[0];
    const amountOfCurrency = value;
    const fullCurrencyValue = getTotalValueAsPrice(actualCurrencyValue, amountOfCurrency)
    setTotalCurrencyValue(fullCurrencyValue.toString())
  }

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    if(Number(value) < 0) return; // Don't calculate values below 0
    localStorage.setItem("amount", value);
    setAmount(value);
    getTotalCurrencyValue(Number(value));
  };

  const { panel, input, span, paragraph } = styles;
  return (
    <div className={panel}>
      <input
        className={input}
        type="number"
        value={amount}
        onChange={e => handleAmountChange(e)}
        placeholder={`Set your amount of ${currencyFrom}`}
      />
      <span className={span}>=</span>
      <p className={paragraph}>{totalCurrencyValue ? totalCurrencyValue : 0} {currencyTo}</p>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  convertedCurrencyData: getConvertedCurrencyData(state),
  currencyFrom: getCurrencyFromValue(state),
  currencyTo: getCurrencyToValue(state)
});

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  {}
)(PricePanel);
