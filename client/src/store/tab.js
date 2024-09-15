import { createSlice } from "@reduxjs/toolkit";

const tabslice = createSlice({
  name: 'tab',
  initialState: {currentTab: "Home"},
  reducers: {
    changeTab :(state,action)=>{
      state.currentTab = action.payload
    }
  }
})

export const tabsliceActions = tabslice.actions
export default tabslice