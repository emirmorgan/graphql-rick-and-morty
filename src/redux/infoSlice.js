import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    totalPage: null,
  },
  reducers: {
    getTotalPage: (state, actions) => {
      state.totalPage = actions.payload;
    },
  },
});

export default infoSlice.reducer;
export const { getTotalPage } = infoSlice.actions;
