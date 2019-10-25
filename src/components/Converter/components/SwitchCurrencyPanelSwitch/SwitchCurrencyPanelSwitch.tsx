import React, { FC } from "react";
import styles from "./SwitchCurrencyPanelSwitch.module.css";

interface ParentProps {
  onClick: () => void;
}

type Props = ParentProps;

const SwitchCurrencyPanelSwitch: FC<Props> = ({ onClick }) => {
  const { button } = styles;
  return (
    <button className={button} onClick={onClick}>
      &#8646;
    </button>
  );
};

export default SwitchCurrencyPanelSwitch;
