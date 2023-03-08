import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { bestSelling } from "../model/fakeData";

const addItem = createAsyncThunk("/cart/addToCart", () => {});

const removeItem = createAsyncThunk("/cart/removeFromCart", () => {});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [...bestSelling],
  },
  //   extraReducers(builder) {
  //     builder.addCase();
  //   },
});

export default cartSlice.reducer;
