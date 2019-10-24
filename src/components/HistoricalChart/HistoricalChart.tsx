import React, { FC } from "react";
import Chart from "./components/Chart";
import DatePanel from "./components/DatePanel";

const HistoricalChart: FC = () => {
  return (
    <div>
      <Chart />
      <DatePanel />
    </div>
  );
};

export default HistoricalChart;
