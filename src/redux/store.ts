import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import labSlice from "./labSlice";

export const store = configureStore({
  reducer: {
    lab: labSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
