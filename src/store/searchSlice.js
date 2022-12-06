import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search-result",
  initialState: [],
  reducers: {
    getProducts(state, payload) {},
  },
});

const fetchSearch = createAsyncThunk();
