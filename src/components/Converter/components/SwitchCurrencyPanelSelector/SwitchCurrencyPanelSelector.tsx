import React, { FC, ChangeEvent } from "react";
import styles from "./SwitchCurrencyPanelSelector.module.css";

interface ParentProps {
  options: string[];
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

type Props = ParentProps;

const SwitchCurrencyPanelSelector: FC<Props> = ({
  options,
  name,
  value,
  onChange
}) => {
  const { selector } = styles;
  return (
    <select className={selector} name={name} value={value} onChange={onChange}>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
};

export default SwitchCurrencyPanelSelector;
