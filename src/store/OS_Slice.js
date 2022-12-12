import { createSlice } from "@reduxjs/toolkit";

const systemSlice = createSlice({
  name: "system",
  initialState: {
    system: "PC",
  },
  reducers: {
    setSystem(state, action) {
      if (
        action.payload.width >= 1200 &&
        action.payload.width / action.payload.height > 1.5
      )
        state.system = "PC";
      else if (
        action.payload.width < 1200 &&
        action.payload.width > 500 &&
        action.payload.width / action.payload.height < 1.4
      )
        state.system = "Tablet";
      else if (
        action.payload.width < 500 &&
        action.payload.width / action.payload.height < 1.4
      )
        state.system = "Mobile";
      else if (
        action.payload.width < 1200 &&
        action.payload.width > 500 &&
        action.payload.width / action.payload.height > 1.4
      )
        state.system = "Tablet-rotated";
      else state.system = "Mobile-rotated";
    },
  },
});

export const { setSystem } = systemSlice.actions;

export default systemSlice.reducer;
