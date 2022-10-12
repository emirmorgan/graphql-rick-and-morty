import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    page: 1,
    name: "",
    gender: "",
    species: "",
  },
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { changePage } = filterSlice.actions;
