import React, { FC, useState, ChangeEvent } from "react";
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
  const [selectorsData, setSelectorsData] = useState({
  /**  
    * When user first time will enter to application, the default state will be set to SEK and PLN.
    * When user will use application he will set new localStorage item
    * Every next time the default state will be taked from local storage,
    * so if user will reload page the last searching result will be displayed
    */
    currencyFrom: localStorage.getItem("currencyFrom") || "SEK",
    currencyTo: localStorage.getItem("currencyTo") || "PLN"
  });
  const { currencyFrom, currencyTo } = selectorsData;

  // convert keys to values { EUR : 4.123, PLN: 1.001, ... } => ["EUR", "PLN", ...]
  const createListOfCurrencies = keys(currencyData.rates);

  const onChange = (e: ChangeEvent<HTMLSelectElement>):void => {
    const { name, value } = e.target;
    setSelectorsData({
      ...selectorsData,
      [name]: value
    });
    localStorage.setItem(name, value)
  };

  return (
    <div className={panel}>
      <SwitchCurrencyPanelSelector
        options={createListOfCurrencies}
        name="currencyFrom"
        value={currencyFrom}
        onChange={onChange}
      />
      <SwitchCurrencyPanelSwitch />
      <SwitchCurrencyPanelSelector
        options={createListOfCurrencies}
        name="currencyTo"
        value={currencyTo}
        onChange={onChange}
      />
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
