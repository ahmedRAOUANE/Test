import { configureStore } from "@reduxjs/toolkit";
import signup from "./signupSlice";

const store = configureStore({
  reducer: {
    signup,
  },
});

export default store;
