import { PayloadAction } from "@reduxjs/toolkit";
import { ILoginData } from "./initialState";

export const setUser=(state:ILoginData,{payload}:PayloadAction<ILoginData>)=>{
  state.user=payload.user;
  state.email=payload.email;
  state.id=payload.id;
}
export const deleteUser=(state:ILoginData)=>{
  state.user='';
  state.email='';
  state.id='';
}