import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    page: 1,
    name: "",
    gender: "",
    species: "",
  },
  reducers: {},
});

export default filterSlice.reducer;
