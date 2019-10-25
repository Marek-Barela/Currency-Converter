import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./DataPanel.module.css";
import { fetchHistoricalCurrencyData } from "./DataPanel-actions";
import { PeriodOfTime } from "./DataPanel-model";
import { connect } from "react-redux";
import { getConvertedFullYear } from "../../../../utils/getConvertedFullYear";
import "../../../../../node_modules/react-datepicker/dist/react-datepicker.css";

interface DispatchProps {
  fetchHistoricalCurrencyData: (action: PeriodOfTime) => void;
}

type Props = DispatchProps;

const DataPanel: FC<Props> = ({ fetchHistoricalCurrencyData }) => {
  const date = new Date();
  const MONTH_IN_MILISECONDS = 2629746000;

  const [dateState, setDateState] = useState({
    fromDate: new Date(date.getTime() - MONTH_IN_MILISECONDS),
    toDate: date
  });

  const { fromDate, toDate } = dateState;

  const handleButtonClick = () => {
    const convertedDateFrom = getConvertedFullYear(fromDate); // 10-09-2019
    const convertedDateTo = getConvertedFullYear(toDate);

    fetchHistoricalCurrencyData({
      dateFrom: convertedDateFrom,
      dateTo: convertedDateTo
    });
  };

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
      />
      <span className={separator}></span>
      <DatePicker
        selected={toDate}
        onChange={(date: Date) => setDateState({ ...dateState, toDate: date })}
        minDate={fromDate}
        maxDate={new Date()}
        className={datapicker}
      />
      <button onClick={handleButtonClick}>Click</button>
    </div>
  );
};

const mapDispatchToProps = {
  fetchHistoricalCurrencyData
};

export default connect(
  null,
  mapDispatchToProps
)(DataPanel);
