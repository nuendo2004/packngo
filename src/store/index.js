import { configureStore } from "@reduxjs/toolkit";
import OSreducer from "./OS_Slice";
import userSlice from "./userSlice";
import cartSlice from "./CartSlice";

const store = configureStore({
  reducer: { system: OSreducer, user: userSlice, cart: cartSlice },
});

export default store;
