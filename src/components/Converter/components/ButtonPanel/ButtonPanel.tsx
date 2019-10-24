import React from "react";
import ButtonPanelSelector from "../ButtonPanelSelector";
import ButtonPanelSwitch from "../ButtonPanelSwitch";
import styles from "./ButtonPanel.module.css";

const ButtonPanel = () => {
  const { panel } = styles;
  return (
    <div className={panel}>
      <ButtonPanelSelector options={[]} />
      <ButtonPanelSwitch />
      <ButtonPanelSelector options={[]} />
    </div>
  );
};

export default ButtonPanel;
