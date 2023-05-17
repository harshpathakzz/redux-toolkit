import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./slices/counter/index.js";
const store = configureStore({
  reducer: {
    counter: couterReducer,
    // Here we will be adding reducers
  },
});

export default store;
