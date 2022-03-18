import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactForm.js";
import posReducer from "./currentPosition";
import notificationReducer from "./notificationSlice";
export default configureStore({
  reducer: {
    contactReducer,
    posReducer,
    notificationReducer,
  },
  devTools: true,
});
