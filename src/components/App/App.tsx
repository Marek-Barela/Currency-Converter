import React from "react";
import Converter from "../Converter";
import HistoricalChart from "../HistoricalChart";
import Footer from "../Footer";

const App = () => {
  return (
    <>
      <main>
        <Converter />
        <HistoricalChart />
      </main>
      <Footer />
    </>
  );
};

export default App;
