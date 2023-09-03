import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [datas, setDatas] = useState([]);

  const calculateHandler = ({
    currentSaving,
    yearlySaving,
    expectedInterest,
    duration,
  }) => {
    const yearlyData = []; // per-year results

    let currentSavings = +currentSaving; // feel free to change the shape of this input object!
    const yearlyContribution = +yearlySaving; // as mentioned: feel free to change the shape...
    const expectedReturn = expectedInterest / 100;
    const durations = duration;

    for (let i = 0; i < durations; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInvestment: +currentSaving + (i + 1) * yearlyContribution,
      });
    }

    return yearlyData;
  };

  const submitHandler = ({currentSaving,yearlySaving,expectedInterest,duration,}) => {
    const data = calculateHandler({ currentSaving,yearlySaving,expectedInterest,duration});
    setDatas(data);
  };

  return (
    <div>
      <Header />
      <Form submitHandler={submitHandler} />
      <Table data={datas} />
    </div>
  );
}

export default App;
