import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { addUser,addUSers } from "./reducer";

export const userSlice=createSlice({
  name:'user',
  initialState,
  reducers:{
    addUser,
    addUSers
  }
})

export const userActions=userSlice.actions;
export default userSlice.reducer;