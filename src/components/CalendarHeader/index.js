import React from "react";
import "./styles.scss";

const CalendarHeader = () => {
  return (
    <>
      <div className="calendar-header-container">
        <h2 className="year">2023</h2>
        <h2 className="month">February</h2>
      </div>

      <div className="week-days-container">
        <p className="week-day">SUN</p>
        <p className="week-day">MON</p>
        <p className="week-day">TUE</p>
        <p className="week-day">WED</p>
        <p className="week-day">THU</p>
        <p className="week-day">FRI</p>
        <p className="week-day">SAT</p>
      </div>
    </>
  );
}

export default CalendarHeader;
