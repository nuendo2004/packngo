import { configureStore } from "@reduxjs/toolkit";
import OSreducer from "./OS_Slice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: { system: OSreducer, user: userSlice },
});

export default store;
