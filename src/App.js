import React, { useState } from "react";
import CalendarTest from "./components/CalendarTest";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDate = (date) => {
    setStartDate(date);
  };

  const handleEndDate = (date) => {
    setEndDate(date);
  };

  const testDate = new Date();

  if (testDate - startDate && endDate - testDate) {
    // testDate가 기간 내에 있냐
    console.log("test");
  }

  return (
    <>
      <CalendarTest
        startDate={startDate}
        handleStartDate={handleStartDate}
        endDate={endDate}
        handleEndDate={handleEndDate}
      />
    </>
  );
}

export default App;
