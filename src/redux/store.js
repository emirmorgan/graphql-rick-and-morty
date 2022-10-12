import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import infoSlice from "./infoSlice";

export const store = configureStore({
  reducer: { filter: filterSlice, info: infoSlice },
});
