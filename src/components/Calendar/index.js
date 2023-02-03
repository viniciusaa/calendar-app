import React, { useState } from "react";
import { useSelector } from "react-redux";
import CalendarHeader from "../CalendarHeader";
import CalendarBody from "../CalendarBody";
import ContentHeader from "../ContentHeader";
import ReminderForm from "../ReminderForm";
import DayCard from "../DayCard";
import NoReminders from "../../assets/images/no-reminders.png";
import "./styles.scss";

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState("1");
  const [displayForm, setDisplayForm] = useState(false);
  const [selectedReminderId, setSelectedReminderId] = useState("");

  const remindersList = useSelector((state) => {
    return state.reminders;
  });

  const monthDays = {
    Sunday: ["", "5", "12", "19", "26"],
    Monday: ["", "6", "13", "20", "27"],
    Tuesday: ["", "7", "14", "21", "28"],
    Wednesday: ["1", "8", "15", "22", ""],
    Thursday: ["2", "9", "16", "23", ""],
    Friday: ["3", "10", "17", "24", ""],
    Saturday: ["4", "11", "18", "25", ""],
  };

  const openEditForm = (id) => {
    setDisplayForm(true);
    setSelectedReminderId(id);
  };

  const selectDay = (day) => {
    setDisplayForm(false);
    setSelectedReminderId("");
    setSelectedDay(day);
  };

  const dateInfo = remindersList[selectedDay]?.length ? (
    <div className="cards-container">
      {remindersList[selectedDay].map((reminder) => {
        return (
          <DayCard
            color={reminder.color}
            title={reminder.title}
            description={reminder.description}
            time={reminder.time}
            key={reminder.id}
            onClick={() => openEditForm(reminder.id)}
          />
        );
      })}
    </div>
  ) : (
    <div className="image-container">
      <img className="image" src={NoReminders} alt="no reminders" />
    </div>
  );

  return (
    <>
      <div className="date-content">
        <ContentHeader
          selectedDay={selectedDay}
          monthDays={monthDays}
          setDisplayForm={setDisplayForm}
          displayForm={displayForm}
        />

        {displayForm ? (
          <ReminderForm
            setDisplayForm={setDisplayForm}
            selectedDay={selectedDay}
            setSelectedReminderId={setSelectedReminderId}
            selectedReminderId={selectedReminderId}
            remindersList={remindersList}
          />
        ) : (
          dateInfo
        )}
      </div>

      <div className="calendar-container">
        <CalendarHeader />

        <CalendarBody
          selectDay={selectDay}
          selectedDay={selectedDay}
          monthDays={monthDays}
          setDisplayForm={setDisplayForm}
        />
      </div>
    </>
  );
};

export default Calendar;
