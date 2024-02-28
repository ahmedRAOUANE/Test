import { configureStore } from "@reduxjs/toolkit";

// slices
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import loaderSlice from "./loaderSlice";

const store = configureStore({
  reducer: {
    authSlice,
    userSlice,
    loaderSlice
  },
});

export default store;
