import slidebarSlice from "./slidebar";
import tabslice from "./tab";
import loggedInSlice from "./loggedin";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
  slidebar: slidebarSlice.reducer,
  tab: tabslice.reducer,
  loggedin: loggedInSlice.reducer,
  }
})

export default store