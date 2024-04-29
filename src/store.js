import { configureStore } from "@reduxjs/toolkit";
import searchBookReducer from "./features/searchBookSlice";

const store = configureStore({
  reducer: {
    // Add reducers here
    searchBook: searchBookReducer,
  },
});
export default store;