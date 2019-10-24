import React from "react";
import styles from "./PricePanel.module.css";

const PricePanel = () => {
  const { panel } = styles;
  return (
    <div className={panel}>
      <input type="number" />
      <span>=</span>
      <p>Value</p>
    </div>
  );
};

export default PricePanel;
