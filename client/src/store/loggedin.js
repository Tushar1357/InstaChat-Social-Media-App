import { createSlice } from "@reduxjs/toolkit";

const loggedInSlice = createSlice({
  name: 'loggedin',
  initialState: {loggedInState: false},
  reducers: {
    changeState: (state,action)=>{
      state.loggedInState = action.payload;
    }
  }
})

export const loggedInActions = loggedInSlice.actions

export default loggedInSlice