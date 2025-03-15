import { configureStore } from "@reduxjs/toolkit";
import statReducer from "./statSlice"; // Import your slice

export const store = configureStore({
  reducer: {
    stat: statReducer, // Register your reducer
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;