import React, { FC } from "react";
import SwitchCurrencyPanelSelector from "../SwitchCurrencyPanelSelector";
import SwitchCurrencyPanelSwitch from "../SwitchCurrencyPanelSwitch";
import { CurrencyData } from "../../Converter-model";
import { getCurrencyData } from "../../Converter-selector";
import { connect } from "react-redux";
import { RootState } from "../../../../redux/root-reducer";
import styles from "./SwitchCurrencyPanel.module.css";

interface StateProps {
  currencyData: CurrencyData;
}

type Props = StateProps;

const SwitchCurrencyPanel: FC<Props> = ({ currencyData }) => {
  const { panel } = styles;
  return (
    <div className={panel}>
      <SwitchCurrencyPanelSelector options={[]} />
      <SwitchCurrencyPanelSwitch />
      <SwitchCurrencyPanelSelector options={[]} />
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
