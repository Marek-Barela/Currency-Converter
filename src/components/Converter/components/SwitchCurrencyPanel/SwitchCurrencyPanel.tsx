import React, { FC } from "react";
import SwitchCurrencyPanelSelector from "../SwitchCurrencyPanelSelector";
import SwitchCurrencyPanelSwitch from "../SwitchCurrencyPanelSwitch";
import { CurrencyData } from "../../Converter-model";
import { getCurrencyData } from "../../Converter-selector";
import { connect } from "react-redux";
import { RootState } from "../../../../redux/root-reducer";
import { keys } from "ramda";
import styles from "./SwitchCurrencyPanel.module.css";

interface StateProps {
  currencyData: CurrencyData;
}

type Props = StateProps;

const SwitchCurrencyPanel: FC<Props> = ({ currencyData }) => {
  const { panel } = styles;

  // convert keys to values { EUR : 4.123, PLN; 1.001, ... } => ["EUR", "PLN", ...]
  const createListOfCurrencies = keys(currencyData.rates);

  return (
    <div className={panel}>
      <SwitchCurrencyPanelSelector options={createListOfCurrencies} />
      <SwitchCurrencyPanelSwitch />
      <SwitchCurrencyPanelSelector options={createListOfCurrencies} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  currencyData: getCurrencyData(state)
});

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  {}
)(SwitchCurrencyPanel);
