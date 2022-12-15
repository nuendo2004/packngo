import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    location: {
      zipCode: "00000",
      lat: "",
      long: "",
      city: "NewYork City",
      state: "NY",
    },
  },
  reducers: {
    setLocation() {},
  },
});

export const { setLocation } = userSlice.actions;

export default userSlice.reducer;
