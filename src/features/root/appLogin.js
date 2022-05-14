import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: { access_token: false },
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
