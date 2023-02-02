import React from "react";
import DayButton from "../DayButton";
import "./styles.scss";

const CalendarBody = ({setSelectedDay, selectedDay, monthDays}) => {
  return (
    <div className="calendar-body-container">
      <div className="days-container">
        {monthDays["Sunday"].map((day, index)=>{
          return <DayButton day={day} active={day == selectedDay} key={index} onClick={() => setSelectedDay(day)} />
        })}
      </div>

      <div className="days-container">
        {monthDays["Monday"].map((day, index)=>{
          return <DayButton day={day} active={day == selectedDay} key={index} onClick={() => setSelectedDay(day)} />
        })}
      </div>

      <div className="days-container">
        {monthDays["Tuesday"].map((day, index)=>{
          return <DayButton day={day} active={day == selectedDay} key={index} onClick={() => setSelectedDay(day)} />
        })}
      </div>

      <div className="days-container">
        {monthDays["Wednesday"].map((day, index)=>{
          return <DayButton day={day} active={day == selectedDay} key={index} onClick={() => setSelectedDay(day)} />
        })}
      </div>

      <div className="thursday-container">
        {monthDays["Thursday"].map((day, index)=>{
          return <DayButton day={day} active={day == selectedDay} key={index} onClick={() => setSelectedDay(day)} />
        })}
      </div>

      <div className="friday-container">
        {monthDays["Friday"].map((day, index)=>{
          return <DayButton day={day} active={day == selectedDay} key={index} onClick={() => setSelectedDay(day)} />
        })}
      </div>

      <div>
        {monthDays["Saturday"].map((day, index)=>{
          return <DayButton day={day} active={day == selectedDay} key={index} onClick={() => setSelectedDay(day)} />
        })}
      </div>
    </div>
  );
}

export default CalendarBody;
