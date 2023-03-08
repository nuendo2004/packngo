import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { bestSelling } from "../model/fakeData";

const productsSlice = createSlice({
  name: "name",
  initialState: {
    catalog: [],
    bestselling: [...bestSelling],
    asyncState: "idle",
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllProduct.rejected, (state) => {
      state.asyncState = "failed";
    });
    builder.addCase(getAllProduct.pending, (state) => {
      state.asyncState = "loading";
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.asyncState = "succuss";
      state.catalog = action.payload;
    });
  },
});

const getAllProduct = createAsyncThunk("getProducts", async () => {
  const res = await axios.get(`${process.env.SERVER_URL}/all-products`);
  return res.data;
});

export default productsSlice.reducer;
