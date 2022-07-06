import { createSlice } from "@reduxjs/toolkit";


export const numberSlice = createSlice({
  name: 'fetchNumber',
  initialState: {
    clickedNumber: null
  },
  reducers: {
    numberClicked: (state, action)=> {
      state.clickedNumber = action.payload
    }
  }
})

export const {numberClicked} = numberSlice.actions
export default numberSlice.reducer