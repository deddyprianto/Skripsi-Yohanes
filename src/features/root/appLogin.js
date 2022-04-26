import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const appLogin = createSlice({
  name: "appLogin",
  initialState,
  reducers: {
    actionsLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});
export const { actionsLogin } = appLogin.actions;

export default appLogin.reducer;
