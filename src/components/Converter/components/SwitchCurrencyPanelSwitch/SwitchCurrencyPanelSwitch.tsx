import React, { FC } from "react";

interface ParentProps {
  onClick: () => void;
}

type Props = ParentProps;

const SwitchCurrencyPanelSwitch: FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>x</button>;
};

export default SwitchCurrencyPanelSwitch;
