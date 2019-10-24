import React from "react";
import SwitchCurrencyPanelSelector from "../SwitchCurrencyPanelSelector";
import SwitchCurrencyPanelSwitch from "../SwitchCurrencyPanelSwitch";
import styles from "./SwitchCurrencyPanel.module.css";

const SwitchCurrencyPanel = () => {
  const { panel } = styles;
  return (
    <div className={panel}>
      <SwitchCurrencyPanelSelector options={[]} />
      <SwitchCurrencyPanelSwitch />
      <SwitchCurrencyPanelSelector options={[]} />
    </div>
  );
};

export default SwitchCurrencyPanel;
