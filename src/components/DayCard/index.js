import React from "react";
import "./styles.scss";
import Clock from "../../assets/images/clock.svg";
import Edit from "../../assets/images/edit.svg";

const DayCard = ({ color, title, description, time, onClick }) => {
  const truncatedTitle =
    title.length > 55 ? title.substring(0, 55) + "..." : title;
  const truncatedDescription =
    description.length > 130
      ? description.substring(0, 130) + "..."
      : description;

  return (
    <div className="card">
      <div className="reminder-color" style={{ backgroundColor: color }}></div>

      <div className="reminder-info">
        <p className="reminder-title">{truncatedTitle}</p>
        <p className="reminder-description">{truncatedDescription}</p>
      </div>

      <div className="time-container">
        <img src={Clock} alt="time" />
        <p className="time-paragraph">{time.length ? time : "-"}</p>
      </div>

      <button className="edit-reminder" onClick={onClick}>
        <img src={Edit} alt="edit" />
      </button>
    </div>
  );
};

export default DayCard;
