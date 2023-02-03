import React from "react";
import "./styles.scss";

const DayButton = ({ day, active, onClick }) => {
  const classes = `day ${active && "active"} ${
    day.length > 1 && "decimal-number"
  }`;

  if (day) {
    return (
      <button className={classes} onClick={onClick}>
        {day}
      </button>
    );
  } else {
    return <div className="absent-day"></div>;
  }
};

export default DayButton;
