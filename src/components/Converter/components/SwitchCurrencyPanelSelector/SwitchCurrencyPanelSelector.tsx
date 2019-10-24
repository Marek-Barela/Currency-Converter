import React, { FC } from "react";

interface ParentProps {
  options: [];
}

type Props = ParentProps;

const SwitchCurrencyPanelSelector: FC<Props> = ({ options = [] }) => {
  return (
    <select>
      {options.map(option => {
        return <option>{option}</option>;
      })}
    </select>
  );
};

export default SwitchCurrencyPanelSelector;
