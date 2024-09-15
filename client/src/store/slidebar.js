import { createSlice } from "@reduxjs/toolkit";

const slidebarSlice = createSlice({
  name: 'slidebar',
  initialState: {currentStatus: true},
  reducers: {
    changeSlideBarStatus :(state)=>{
      state.currentStatus = !state.currentStatus
    }
  }
})

export const slidebarActions = slidebarSlice.actions
export default slidebarSlice