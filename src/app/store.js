import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import appModal from "features/root/appModal";
import appSlice from "features/root/appSlice";
import appLogin from "features/root/appLogin";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const reducer = combineReducers({
  modal: appModal,
  slice: appSlice,
  login: appLogin,
});

export const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["modal", "login"],
  blacklist: ["slice"],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
