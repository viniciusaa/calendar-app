import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addReminder, updateReminder, removeReminder } from "../../store";
import Button from "../Button";
import ColorSelectionInput from "../ColorSelectionInput";
import "./styles.scss";

const ReminderForm = ({
  setDisplayForm,
  selectedDay,
  setSelectedReminderId,
  selectedReminderId,
  remindersList,
  selectedMonth,
}) => {
  const dispatch = useDispatch();

  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedColor, setSelectedColor] = useState("#C8E6C9");
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);

  const colorList = [
    "#C8E6C9",
    "#F5DD29",
    "#FFCC80",
    "#EF9A9A",
    "#CD8DE5",
    "#5BA4CF",
    "#29CCE5",
    "#6DECA9",
    "#FF8ED4",
    "#BCAAA4",
  ];

  useEffect(() => {
    if (selectedReminderId && !selectedReminderId.empty) {
      const selectedReminder = remindersList[selectedMonth][selectedDay]?.find(
        (reminder) => reminder.id === selectedReminderId
      );

      setSelectedColor(selectedReminder.color);
      setSelectedTitle(selectedReminder.title);
      setSelectedDescription(selectedReminder.description);
      setSelectedDate(selectedReminder.date);
      setSelectedTime(selectedReminder.time);
    }
  }, [remindersList, selectedDay, selectedMonth, selectedReminderId]);

  const createReminder = () => {
    const data = {
      month: selectedMonth,
      day: selectedDay,
      reminder: {
        id: nextId(),
        title: selectedTitle,
        description: selectedDescription,
        date: selectedDate,
        time: selectedTime,
        color: selectedColor,
      },
    };

    const action = addReminder(data);
    dispatch(action);
  };

  const reviseReminder = () => {
    const data = {
      month: selectedMonth,
      day: selectedDay,
      id: selectedReminderId,
      reminder: {
        id: selectedReminderId,
        title: selectedTitle,
        description: selectedDescription,
        date: selectedDate,
        time: selectedTime,
        color: selectedColor,
      },
    };

    const action = updateReminder(data);
    dispatch(action);
  };

  const handleOnSave = (event) => {
    event?.preventDefault();

    if (!selectedTitle.length) {
      setDisplayErrorMessage(true);
    } else {
      selectedReminderId && !selectedReminderId.empty
        ? reviseReminder()
        : createReminder();

      setDisplayForm(false);
      setSelectedReminderId("");
    }
  };

  const handleOnRemove = (event) => {
    event?.preventDefault();

    const data = {
      month: selectedMonth,
      day: selectedDay,
      id: selectedReminderId,
    };

    const action = removeReminder(data);
    dispatch(action);
    setDisplayForm(false);
    setSelectedReminderId("");
  };

  const closeForm = () => {
    setSelectedReminderId("");
    setDisplayForm(false);
  };

  return (
    <>
      <div className="form-container">
        <div>
          <label className="label" htmlFor="title">
            Title:
          </label>

          <input
            className="input"
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={selectedTitle}
            onChange={(e) => setSelectedTitle(e.target.value)}
          />

          <p className={displayErrorMessage ? "error" : "hidden-error"}>
            Title can't be blank
          </p>
        </div>

        <div>
          <label className="label" htmlFor="description">
            Description:
          </label>

          <textarea
            className="input"
            id="description"
            name="description"
            placeholder="Description"
            value={selectedDescription}
            onChange={(e) => setSelectedDescription(e.target.value)}
          />
        </div>

        <div className="date-container">
          <div>
            <label className="label" htmlFor="date">
              Date:
            </label>

            <input
              className="input"
              type="date"
              id="date"
              name="date"
              placeholder="MM/DD/YY"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          <div>
            <label className="label" htmlFor="time">
              Time:
            </label>

            <input
              className="input"
              type="time"
              id="time"
              name="time"
              placeholder="HH/MM"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            />
          </div>
        </div>

        <div>
          <p className="label">Color:</p>

          <div className="color-selection-container">
            {colorList.map((color) => {
              return (
                <ColorSelectionInput
                  key={color}
                  color={color}
                  setSelectedColor={setSelectedColor}
                  active={selectedColor === color}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="form-options-container">
        <div>
          {selectedReminderId && (
            <Button text={"Remove"} onClick={handleOnRemove} />
          )}
        </div>

        <div className="options-container">
          <Button text={"Cancel"} onClick={closeForm} />
          <Button text={"Save"} onClick={handleOnSave} />
        </div>
      </div>
    </>
  );
};

export default ReminderForm;
