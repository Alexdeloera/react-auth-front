import { PayloadAction } from "@reduxjs/toolkit";
import { ILoginData } from "./initialState";

export const setUser=(state:ILoginData,{payload}:PayloadAction<ILoginData>)=>{
  state.user=payload.user;
  state.token=payload.token;
}
export const deleteUser=(state:ILoginData)=>{
  state.user='';
  state.token='';
}