import React, { FC, useState, useEffect, ChangeEvent } from "react";
import CurrencyPanelSelector from "../SwitchCurrencyPanelSelector";
import SwitchCurrencyButton from "../SwitchCurrencyPanelSwitch";
import {
  setFromCurrencyConversion,
  setToCurrencyConversion
} from "../../Converter-actions";
import { fetchConvertedCurrencyData } from "./SwitchCurrencyPanel-action";
import { CurrencyData } from "../../Converter-model";
import { getCurrencyData } from "../../Converter-selector";
import { connect } from "react-redux";
import { RootState } from "../../../../redux/root-reducer";
import { keys } from "ramda";
import styles from "./SwitchCurrencyPanel.module.css";

interface StateProps {
  currencyData: CurrencyData;
}

interface DispatchProps {
  setFromCurrencyConversion: (action: string) => void;
  setToCurrencyConversion: (action: string) => void;
  fetchConvertedCurrencyData: () => void;
}

type Props = StateProps & DispatchProps;

const SwitchCurrencyPanel: FC<Props> = ({
  currencyData,
  setFromCurrencyConversion,
  setToCurrencyConversion,
  fetchConvertedCurrencyData
}) => {
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

  useEffect(() => {
    /**
     * Every time when state will be updated fetch converted currency
     */
    setFromCurrencyConversion(currencyFrom);
    setToCurrencyConversion(currencyTo);
    fetchConvertedCurrencyData();
  }, [currencyFrom, currencyTo]);

  // use ramda to convert keys to values { EUR : 4.123, PLN: 1.001, ... } => ["EUR", "PLN", ...]
  const listOfCurrencies = keys(currencyData.rates);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setSelectorsData({
      ...selectorsData,
      [name]: value
    });
    localStorage.setItem(name, value);
  };

  const handleCurrencySwitch = () => {
    const from = currencyFrom;
    const to = currencyTo;

    setSelectorsData({
      ...selectorsData,
      currencyFrom: to,
      currencyTo: from
    });
  };

  return (
    <div className={panel}>
      <CurrencyPanelSelector
        options={listOfCurrencies}
        name="currencyFrom"
        value={currencyFrom}
        onChange={handleSelectChange}
      />
      <SwitchCurrencyButton onClick={handleCurrencySwitch} />
      <CurrencyPanelSelector
        options={listOfCurrencies}
        name="currencyTo"
        value={currencyTo}
        onChange={handleSelectChange}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  currencyData: getCurrencyData(state)
});

const mapDispatchToProps = {
  setFromCurrencyConversion,
  setToCurrencyConversion,
  fetchConvertedCurrencyData
};

export default connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(SwitchCurrencyPanel);
