import React, { FC, useEffect } from "react";
import SwitchCurrencyPanel from "./components/SwitchCurrencyPanel";
import PricePanel from "./components/PricePanel";
import { fetchCurrencyData } from "./Converter-actions";
import store from "../../redux/store";
import styles from "./Converter.module.css";

const Converter: FC = () => {
  useEffect(() => {
    store.dispatch(fetchCurrencyData());
  });

  const { converter, wrapper } = styles;
  return (
    <section className={converter}>
      <div className={wrapper}>
        <SwitchCurrencyPanel />
        <PricePanel />
      </div>
    </section>
  );
};

export default Converter;
