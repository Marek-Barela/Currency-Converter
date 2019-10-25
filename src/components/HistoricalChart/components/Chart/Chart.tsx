import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import { getHistoricalData } from "../DatePanel/DataPanel-selector";
import {
  getCurrencyFromValue,
  getCurrencyToValue
} from "../../../Converter/Converter-selector";
import { HistoricalData } from "../DatePanel/DataPanel-model";
import { connect } from "react-redux";
import styles from "./Chart.module.css";
import { keys, values } from "ramda";
import { RootState } from "../../../../redux/root-reducer";

interface StateProps {
  historicalData: HistoricalData;
  currencyFrom: string;
  currencyTo: string;
}

type Props = StateProps;

const Chart: FC<Props> = ({ historicalData, currencyFrom, currencyTo }) => {
  const { panel } = styles;

  // Server respond with unordered data so is important to sort data before displaying in chart
  const sortedHistoryData: any = {};
  keys(historicalData.rates)
    .sort()
    .forEach(key => {
      sortedHistoryData[key] = historicalData.rates[key];
    });

  /**
   *  Use ramda to get dates and values
   *  extractListOfDates = { 2019-09-15: { SEK: 1.234 }, ... } => ["2019-09-15", "2019-09-16", ...]
   *  extractListOfCurrencies = { 2019-09-15: { SEK: 1.234 }, ... } => [{ SEK: 1.234 }, { SEK: 1.534 }, ... ]
   *  getListOfValues = [{ SEK: 1.234 }, { SEK: 1.534 } => [1.234, 1.534];
   */
  const extractListOfDates = keys(sortedHistoryData);
  const extractListOfCurrencies = values(sortedHistoryData);
  const getListOfValues = extractListOfCurrencies.map(
    currency => values(currency)[0]
  );

  return (
    <div className={panel}>
      <Line
        data={{
          labels: extractListOfDates,
          datasets: [
            {
              label: currencyFrom + " / " + currencyTo,
              data: getListOfValues,
              pointHoverBackgroundColor: "#000000",
              pointHoverRadius: 6,
              backgroundColor: ["rgba(0, 0, 0, 0.5)"],
              borderColor: ["#000000"],
              borderWidth: 3
            }
          ]
        }}
        width={200}
        height={400}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  historicalData: getHistoricalData(state),
  currencyFrom: getCurrencyFromValue(state),
  currencyTo: getCurrencyToValue(state)
});

export default connect(
  mapStateToProps,
  {}
)(Chart);
