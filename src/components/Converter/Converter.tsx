import React, { FC } from "react";
import ButtonPanel from "./components/ButtonPanel";
import PricePanel from "./components/PricePanel";

const Converter: FC = () => {
  return (
    <section>
      <ButtonPanel />
      <PricePanel />
    </section>
  );
};

export default Converter;
