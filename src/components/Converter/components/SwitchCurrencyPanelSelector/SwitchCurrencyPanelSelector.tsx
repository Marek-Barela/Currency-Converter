import React, { FC, ChangeEvent } from "react";

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
  return (
    <select name={name} value={value} onChange={onChange}>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
};

export default SwitchCurrencyPanelSelector;
