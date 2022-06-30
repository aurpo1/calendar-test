import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarTest = ({
  startDate,
  handleStartDate,
  endDate,
  handleEndDate,
}) => {
  return (
    <>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={handleStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={endDate}
        onChange={handleEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};

export default CalendarTest;
