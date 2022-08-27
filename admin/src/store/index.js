import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth-slice";
import blogs from "./blogs-slice";

const store = configureStore({
  reducer: {
    auth,
    blogs,
  },
});

export default store;
