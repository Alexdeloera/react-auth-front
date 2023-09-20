import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { setUser,deleteUser } from "./reducer";

export const loginSlice=createSlice({
  name:'login',
  initialState,
  reducers:{
    setUser,
    deleteUser
  }
})

export const loginActions=loginSlice.actions;
export default loginSlice.reducer;
