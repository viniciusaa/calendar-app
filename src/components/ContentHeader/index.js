import React from "react";
import Button from "../Button";
import "./styles.scss";

const ContentHeader = ({
  selectedDay,
  monthDays,
  getCurrentMonth,
  setDisplayForm,
  displayForm,
}) => {
  const weeks = Object.entries(monthDays);
  const weekDay = weeks.map(
    ([week, days]) => days.includes(selectedDay) && week
  );

  return (
    <div className="content-header-container">
      <h2 className="date">
        {weekDay}, {getCurrentMonth} {selectedDay}, 2023
      </h2>

      {displayForm ? (
        <></>
      ) : (
        <Button onClick={() => setDisplayForm(true)} text="Add reminder" />
      )}
    </div>
  );
};

export default ContentHeader;
