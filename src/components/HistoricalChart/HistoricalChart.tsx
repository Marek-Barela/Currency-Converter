import React, { FC } from "react";
import Chart from "./components/Chart";
import DatePanel from "./components/DatePanel";
import styles from "./HistoricalChart.module.css";

const HistoricalChart: FC = () => {
  const { historicalChart, wrapper } = styles;
  return (
    <section className={historicalChart}>
      <div className={wrapper}>
        <Chart />
        <DatePanel />
      </div>
    </section>
  );
};

export default HistoricalChart;
