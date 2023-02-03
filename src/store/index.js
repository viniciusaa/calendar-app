import { configureStore, createSlice } from "@reduxjs/toolkit";

const remindersSlice = createSlice({
  name: "reminder",
  initialState: {},
  reducers: {
    addReminder(state, action) {
      if (action.payload.day in state) {
        state[action.payload.day].push(action.payload.reminder);
      } else {
        state[action.payload.day] = [action.payload.reminder];
      }
    },
    removeReminder(state, action) {
      const index = state[action.payload.day].findIndex(
        (obj) => obj.id === action.payload.id
      );

      state[action.payload.day].splice(index, 1);
    },
    updateReminder(state, action) {
      const index = state[action.payload.day].findIndex(
        (obj) => obj.id === action.payload.id
      );

      state[action.payload.day][index] = action.payload.reminder;
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
