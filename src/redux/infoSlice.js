import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    totalPage: null,
    totalCount: null,
  },
  reducers: {},
});

export default infoSlice.reducer;
