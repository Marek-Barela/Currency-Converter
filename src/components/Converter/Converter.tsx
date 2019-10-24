import React, { FC, useEffect } from "react";
import SwitchCurrencyPanel from "./components/SwitchCurrencyPanel";
import PricePanel from "./components/PricePanel";
import { fetchCurrencyData } from "./Converter-actions";
import store from "../../redux/store";

const Converter: FC = () => {
  useEffect(() => {
    store.dispatch(fetchCurrencyData());
  });

  return (
    <section>
      <SwitchCurrencyPanel />
      <PricePanel />
    </section>
  );
};

export default Converter;
