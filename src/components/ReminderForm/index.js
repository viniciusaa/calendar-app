import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReminder } from "../../store";
import Button from "../Button";
import ColorSelectionInput from "../ColorSelectionInput";
import "./styles.scss";

const ReminderForm = ({ setDisplayForm, selectedDay }) => {
  const dispatch = useDispatch();

  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedColor, setSelectedColor] = useState("#C8E6C9");

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

  const getReminders = useSelector(state => console.log(state));

  const handleOnSave = (event) => {
    event?.preventDefault();

    const data = {
      day: selectedDay,
      reminder: {
        title: selectedTitle,
        description: selectedDescription,
        date: selectedDate,
        time: selectedTime,
        color: selectedColor,
      },
    };

    const action = addReminder(data);
    dispatch(action);
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
        <Button text={"Remove"} />

        <div className="options-container">
          <Button text={"Cancel"} onClick={() => setDisplayForm(false)} />
          <Button text={"Save"} onClick={handleOnSave} />
        </div>
      </div>
    </>
  );
};

export default ReminderForm;
