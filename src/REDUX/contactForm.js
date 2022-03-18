import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contactForm",
  initialState: {
    name: {
      valid: false,
      value: "",
    },
    email: {
      valid: false,
      value: "",
    },
    reason: {
      valid: false,
      value: "",
    },
    message: {
      valid: false,
      value: "",
    },
    ip: "",
    allValid: false,
  },
  reducers: {
    handleNameChange: (state, action) => {
      state.name.value = action.payload;
      if (state.name.value.trim().length > 0) {
        state.name.valid = true;
      } else {
        state.name.valid = false;
      }
      // * all checker
      if (
        state.email.valid &&
        state.name.valid &&
        state.message.valid &&
        state.reason.valid &&
        state.ip.length > 0
      ) {
        state.allValid = true;
      } else {
        state.allValid = false;
      }
    },
    handleEmailChange: (state, action) => {
      state.email.value = action.payload;
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email.value)
      ) {
        if (state.email.value !== "bimalpandey32@gmail.com") {
          state.email.valid = true;
        } else {
          state.email.valid = false;
        }
      } else {
        state.email.valid = false;
      }
      // * all checker
      if (
        state.email.valid &&
        state.name.valid &&
        state.message.valid &&
        state.reason.valid &&
        state.ip.length > 0
      ) {
        state.allValid = true;
      } else {
        state.allValid = false;
      }
    },
    handleReasonChange: (state, action) => {
      state.reason.value = action.payload;
      if (state.reason.value.trim().length > 0) {
        state.reason.valid = true;
      } else {
        state.reason.valid = false;
      }
      // * all checker
      if (
        state.email.valid &&
        state.name.valid &&
        state.message.valid &&
        state.reason.valid &&
        state.ip.length > 0
      ) {
        state.allValid = true;
      } else {
        state.allValid = false;
      }
    },
    handleMessageChange: (state, action) => {
      state.message.value = action.payload;
      if (state.message.value.trim().length > 0) {
        state.message.valid = true;
      } else {
        state.message.valid = false;
      }
      // * all checker
      if (
        state.email.valid &&
        state.name.valid &&
        state.message.valid &&
        state.reason.valid &&
        state.ip.length > 0
      ) {
        state.allValid = true;
      } else {
        state.allValid = false;
      }
    },
    handleIpChange: (state, action) => {
      state.ip = action.payload;
      // if (
      //   state.name.valid &&
      //   state.email.valid &&
      //   state.reason.valid &&
      //   state.message.valid &&
      //   state.ip.length > 0
      // ) {
      //   axios
      //     .post("http://localhost:5000/msg/", {
      //       name: state.name.value,
      //       email: state.email.value,
      //       reason: state.reason.value,
      //       message: state.message.value,
      //       ip: state.ip,
      //     })
      //     .then(() => {})
      //     .catch(() => {});
      // }
    },
    handleClear: (state) => {
      state.name = {
        valid: false,
        value: "",
      };
      state.email = {
        valid: false,
        value: "",
      };
      state.reason = {
        valid: false,
        value: "",
      };
      state.message = {
        valid: false,
        value: "",
      };
      state.allValid = false;
    },
  },
});

export const {
  handleNameChange,
  handleEmailChange,
  handleReasonChange,
  handleMessageChange,
  handleIpChange,
  handleClear,
} = contactSlice.actions;

export default contactSlice.reducer;
