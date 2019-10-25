import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./DataPanel.module.css";
import "../../../../../node_modules/react-datepicker/dist/react-datepicker.css";

const DataPanel: FC = () => {
  const date = new Date();
  const MONTH_IN_MILISECONDS = 2629746000;

  const [dateState, setDateState] = useState({
    fromDate: new Date(date.getTime() - MONTH_IN_MILISECONDS),
    toDate: date
  });

  const { fromDate, toDate } = dateState;
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
    </div>
  );
};

export default DataPanel;
