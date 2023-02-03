import { configureStore, createSlice } from "@reduxjs/toolkit";

const remindersSlice = createSlice({
  name: "reminder",
  initialState: {
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {},
    "6": {},
    "7": {},
    "8": {},
    "9": {},
    "10": {},
    "11": {},
    "12": {},
  },
  reducers: {
    addReminder(state, action) {
      if (action.payload.day in state[action.payload.month]) {
        state[action.payload.month][action.payload.day].push(
          action.payload.reminder
        );
      } else {
        state[action.payload.month][action.payload.day] = [
          action.payload.reminder,
        ];
      }
    },
    removeReminder(state, action) {
      const index = state[action.payload.month][action.payload.day].findIndex(
        (obj) => obj.id === action.payload.id
      );

      state[action.payload.month][action.payload.day].splice(index, 1);
    },
    updateReminder(state, action) {
      const index = state[action.payload.month][action.payload.day].findIndex(
        (obj) => obj.id === action.payload.id
      );

      state[action.payload.month][action.payload.day][index] =
        action.payload.reminder;
    },
  },
});

const store = configureStore({
  reducer: {
    reminders: remindersSlice.reducer,
  },
});

export { store };
export const { addReminder, removeReminder, updateReminder } =
  remindersSlice.actions;
