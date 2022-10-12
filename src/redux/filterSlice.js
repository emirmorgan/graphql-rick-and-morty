import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    page: 1,
    totalPage: 1,
    name: "",
    gender: "",
    species: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    getTotalPage: (state, actions) => {
      state.totalPage = actions.payload;
    },
    updateGender: (state, action) => {
      state.gender = action.payload;
    },
    updateSpecies: (state, action) => {
      state.species = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const {
  setName,
  changePage,
  getTotalPage,
  updateGender,
  updateSpecies,
} = filterSlice.actions;
