import { PayloadAction } from "@reduxjs/toolkit";
import { IUserRegister } from "./initialState";

export const addUser=(state:IUserRegister[],{payload}:PayloadAction<IUserRegister>)=>{
  //state=[...state,payload] el estado no puede ser cambiado solo mutado por lo cual esto es incorrecto
  state.push(payload);
  console.log(state);
  
}

export const addUSers=(state:IUserRegister[],{payload}:PayloadAction<IUserRegister[]>)=>{
  state.push(...payload);
}