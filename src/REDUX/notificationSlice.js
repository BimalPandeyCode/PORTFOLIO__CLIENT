import { createSlice } from "@reduxjs/toolkit";
const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    isActive: false,
    message: "",
  },
  reducers: {
    notify: (state, action) => {
      state.isActive = true;
      state.message = action.payload.message;
    },
    revokeNotify: (state) => {
      state.isActive = false;
      state.message = "";
    },
  },
});

export const { notify, revokeNotify } = notificationSlice.actions;
export default notificationSlice.reducer;
