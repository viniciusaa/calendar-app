import React, { useState } from "react";
import { useSelector } from "react-redux";
import CalendarHeader from "../CalendarHeader";
import CalendarBody from "../CalendarBody";
import ContentHeader from "../ContentHeader";
import ReminderForm from "../ReminderForm";
import DayCard from "../DayCard";
import NoReminders from "../../assets/images/no-reminders.png";
import calendarData from "../../resources/data/calendar";
import "./styles.scss";

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState("1");
  const [displayForm, setDisplayForm] = useState(false);
  const [selectedReminderId, setSelectedReminderId] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("1");

  const remindersList = useSelector((state) => {
    return state.reminders;
  });

  const monthsList = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };

  const getCurrentMonth = monthsList[selectedMonth];

  const openEditForm = (id) => {
    setDisplayForm(true);
    setSelectedReminderId(id);
  };

  const resetParams = () => {
    setDisplayForm(false);
    setSelectedReminderId("");
  };

  const selectDay = (day) => {
    resetParams();
    setSelectedDay(day);
  };

  const updateToNextMonth = () => {
    if (!(selectedMonth === "12")) {
      var month = Number(selectedMonth);
      month++;
      setSelectedDay("1");
      resetParams();
      setSelectedMonth(month.toString());
    }
  };

  const updateToPreviousMonth = () => {
    if (!(selectedMonth === "1")) {
      var month = Number(selectedMonth);
      month--;
      setSelectedDay("1");
      resetParams();
      setSelectedMonth(month.toString());
    }
  };

  const sortByTime = (reminderList) => {
    const list = [...reminderList];

    return list.sort((a, b) => {
      return a.time.localeCompare(b.time);
    });
  };

  const renderReminderList = remindersList[selectedMonth][selectedDay]
    ?.length ? (
    <div className="cards-container">
      {sortByTime(remindersList[selectedMonth][selectedDay]).map((reminder) => {
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
          getCurrentMonth={getCurrentMonth}
          selectedDay={selectedDay}
          monthDays={calendarData[selectedMonth]}
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
            selectedMonth={selectedMonth}
          />
        ) : (
          renderReminderList
        )}
      </div>

      <div className="calendar-container">
        <CalendarHeader
          getCurrentMonth={getCurrentMonth}
          updateToNextMonth={updateToNextMonth}
          updateToPreviousMonth={updateToPreviousMonth}
        />

        <CalendarBody
          selectDay={selectDay}
          selectedDay={selectedDay}
          monthDays={calendarData[selectedMonth]}
          setDisplayForm={setDisplayForm}
        />
      </div>
    </>
  );
};

export default Calendar;
