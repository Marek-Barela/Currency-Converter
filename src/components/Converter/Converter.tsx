import React, { FC } from "react";
import SwitchCurrencyPanel from "./components/SwitchCurrencyPanel";
import PricePanel from "./components/PricePanel";

const Converter: FC = () => {
  return (
    <section>
      <SwitchCurrencyPanel />
      <PricePanel />
    </section>
  );
};

export default Converter;
