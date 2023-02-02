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
      const index = state[action.payload.day].indexOf(action.payload.reminder);

      state[action.payload.day].splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    reminders: remindersSlice.reducer,
  },
});

export { store };
export const { addReminder, removeReminder } = remindersSlice.actions;
