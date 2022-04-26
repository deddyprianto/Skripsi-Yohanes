import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: false,
};

export const appModal = createSlice({
  name: "appModal",
  initialState,
  reducers: {
    actionsModal: (state, action) => {
      state.menu = action.payload;
    },
  },
});
export const { actionsModal } = appModal.actions;

export default appModal.reducer;
