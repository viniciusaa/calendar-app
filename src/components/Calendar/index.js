import React, { useState } from "react";
import CalendarHeader from "../CalendarHeader";
import CalendarBody from "../CalendarBody";
import ContentHeader from "../ContentHeader";
import ReminderForm from "../ReminderForm";
import NoReminders from "../../assets/images/no-reminders.png";
import "./styles.scss";

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState("1");
  const [displayForm, setDisplayForm] = useState(false);

  const monthDays = {
    Sunday: ["", "5", "12", "19", "26"],
    Monday: ["", "6", "13", "20", "27"],
    Tuesday: ["", "7", "14", "21", "28"],
    Wednesday: ["1", "8", "15", "22", ""],
    Thursday: ["2", "9", "16", "23", ""],
    Friday: ["3", "10", "17", "24", ""],
    Saturday: ["4", "11", "18", "25", ""],
  };

  return (
    <>
      <div className="date-content">
        <ContentHeader
          selectedDay={selectedDay}
          monthDays={monthDays}
          setDisplayForm={setDisplayForm}
          displayForm={displayForm}
        />

        { displayForm ?
            <ReminderForm setDisplayForm={setDisplayForm} selectedDay={selectedDay} />
          :
            <div className="image-container">
              <img className="image" src={NoReminders} alt="no reminders" />
            </div>
        }
      </div>

      <div className="calendar-container">
        <CalendarHeader />

        <CalendarBody
          setSelectedDay={setSelectedDay}
          selectedDay={selectedDay}
          monthDays={monthDays}
        />
      </div>
    </>
  );
};

export default Calendar;
