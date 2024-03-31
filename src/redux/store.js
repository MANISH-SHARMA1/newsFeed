import { configureStore } from "@reduxjs/toolkit";
import createNewsSlice from "./createNewsSlice";

const store = configureStore({
  reducer: {
    newsReducer: createNewsSlice,
  },
});

export default store;
