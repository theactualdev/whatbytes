import { configureStore } from "@reduxjs/toolkit";
import statReducer from "./statSlice";

export const store = configureStore({
  reducer: {
    stat: statReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;