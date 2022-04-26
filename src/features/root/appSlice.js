import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  menu: false,
};
export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    actionsMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});
export const { actionsMenu } = appSlice.actions;

export default appSlice.reducer;
