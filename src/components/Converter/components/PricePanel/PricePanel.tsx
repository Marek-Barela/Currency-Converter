import React, { useState, ChangeEvent, FC } from "react";
import { getCurrencyData } from "../../Converter-selector";
import { CurrencyData } from "../../Converter-model";
import { connect } from "react-redux";
import { RootState } from "../../../../redux/root-reducer";
import styles from "./PricePanel.module.css";

interface StateProps {
  currencyData: CurrencyData;
}

type Props = StateProps;

const PricePanel: FC<Props> = ({ currencyData }) => {
  const [amount, setAmount] = useState("1");

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setAmount(value);
    if (!Number(value)) return;
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
      <p>Value</p>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  currencyData: getCurrencyData(state)
});

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  {}
)(PricePanel);
