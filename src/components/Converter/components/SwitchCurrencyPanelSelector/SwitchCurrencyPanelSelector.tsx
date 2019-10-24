import React, { FC } from "react";

interface ParentProps {
  options: string[];
}

type Props = ParentProps;

const SwitchCurrencyPanelSelector: FC<Props> = ({ options }) => {
  return (
    <select>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
};

export default SwitchCurrencyPanelSelector;
