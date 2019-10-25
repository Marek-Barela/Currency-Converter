import React, { useState, useEffect, ChangeEvent, FC } from "react";
import { getConvertedCurrencyData } from "../SwitchCurrencyPanel/SwitchCurrencyPanel-selector";
import { ConvertedCurrencyData } from "../SwitchCurrencyPanel/SwitchCurrencyPanel-model";
import { connect } from "react-redux";
import { RootState } from "../../../../redux/root-reducer";
import { getTotalValueAsPrice } from "../../../../utils/getTotalValueAsPrice";
import styles from "./PricePanel.module.css";

interface StateProps {
  convertedCurrencyData: ConvertedCurrencyData;
}

type Props = StateProps;

const PricePanel: FC<Props> = ({ convertedCurrencyData }) => {
  const [amount, setAmount] = useState("");
  const [totalCurrencyValue, setTotalCurrencyValue] = useState("");
  
  useEffect(() => {
    if(convertedCurrencyData.rates) {
      getTotalCurrencyValue(Number(amount))
    }
  }, [convertedCurrencyData.rates])

  const getTotalCurrencyValue = (value:number) => {
    const actualCurrencyValue: any = Object.values(convertedCurrencyData.rates)[0];
    const amountOfCurrency = value;
    const fullCurrencyValue = getTotalValueAsPrice(actualCurrencyValue, amountOfCurrency)
    setTotalCurrencyValue(fullCurrencyValue.toString())
  }

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setAmount(value);
    getTotalCurrencyValue(Number(value))
  };

  const { panel } = styles;
  return (
    <div className={panel}>
      <input
        type="number"
        value={amount}
        onChange={e => handleAmountChange(e)}
      />
      <span>=</span>
      <p>{totalCurrencyValue ? totalCurrencyValue : 0}</p>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  convertedCurrencyData: getConvertedCurrencyData(state)
});

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  {}
)(PricePanel);
