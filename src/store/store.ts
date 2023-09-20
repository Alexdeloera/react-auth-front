import { configureStore } from "@reduxjs/toolkit";
import users from "./users";
import login from "./login";

export const store=configureStore({
  reducer:{
    users:users,
    login:login
  }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;