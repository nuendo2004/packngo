import { configureStore } from "@reduxjs/toolkit";
import OSreducer from "./OS_Slice";

const store = configureStore({
  reducer: { system: OSreducer },
});

export default store;
