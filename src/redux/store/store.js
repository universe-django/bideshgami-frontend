import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slices/authSlice";

import listReducer from "../slices/listSlices";
const store = configureStore({
  reducer: {
    userAuth: AuthReducer,
    lists: listReducer,
  },
});

export default store;
