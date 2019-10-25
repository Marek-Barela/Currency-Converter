import React, { FC, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import styles from "./DataPanel.module.css";
import { fetchHistoricalCurrencyData } from "./DataPanel-actions";
import {
  getCurrencyFromValue,
  getCurrencyToValue
} from "../../../Converter/Converter-selector";
import { PeriodOfTime } from "./DataPanel-model";
import { connect } from "react-redux";
import { getConvertedFullYear } from "../../../../utils/getConvertedFullYear";
import "../../../../../node_modules/react-datepicker/dist/react-datepicker.css";
import { RootState } from "../../../../redux/root-reducer";

interface StateProps {
  currencyFrom: string;
  currencyTo: string;
}

interface DispatchProps {
  fetchHistoricalCurrencyData: (action: PeriodOfTime) => void;
}

type Props = StateProps & DispatchProps;

const DataPanel: FC<Props> = ({
  fetchHistoricalCurrencyData,
  currencyFrom,
  currencyTo
}) => {
  const MONTH_IN_MILlISECONDS = 2629746000;
  const initialDateFrom = localStorage.getItem("fromDate");
  const initialDateTo = localStorage.getItem("toDate");
  const date = new Date();
  // Create one month difference initialy to get 30 days chart data
  const defaultDate = new Date(date.getTime() - MONTH_IN_MILlISECONDS);

  // Try to init application with localStorage data, if there is no data init application with default date
  const [dateState, setDateState] = useState({
    fromDate: (initialDateFrom && new Date(initialDateFrom)) || defaultDate,
    toDate: (initialDateTo && new Date(initialDateTo)) || date
  });

  const { fromDate, toDate } = dateState;

  /**
   * Every time when user will change actual currency
   * or when he will change historical time period
   * application will fecth new data
   */
  useEffect(() => {
    if (!fromDate || !toDate) return;
    const convertedDateFrom = getConvertedFullYear(fromDate); // Wed Sep 25 2019 15:43:53 GMT+0200 => 2019-09-25
    const convertedDateTo = getConvertedFullYear(toDate);

    localStorage.setItem("fromDate", convertedDateFrom);
    localStorage.setItem("toDate", convertedDateTo);

    fetchHistoricalCurrencyData({
      dateFrom: convertedDateFrom,
      dateTo: convertedDateTo
    });
  }, [fromDate, toDate, currencyFrom, currencyTo]);

  const { panel, datapicker, separator } = styles;
  return (
    <div className={panel}>
      <DatePicker
        selected={fromDate}
        onChange={(date: Date) =>
          setDateState({ ...dateState, fromDate: date })
        }
        maxDate={toDate}
        className={datapicker}
        dateFormat="dd.MM.yyyy"
      />
      <span className={separator}></span>
      <DatePicker
        selected={toDate}
        onChange={(date: Date) => setDateState({ ...dateState, toDate: date })}
        minDate={fromDate}
        maxDate={new Date()}
        className={datapicker}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  currencyFrom: getCurrencyFromValue(state),
  currencyTo: getCurrencyToValue(state)
});

const mapDispatchToProps = {
  fetchHistoricalCurrencyData
};

export default connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(DataPanel);
