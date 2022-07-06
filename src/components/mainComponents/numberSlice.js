import { createSlice } from "@reduxjs/toolkit";
import randomFiveDigits from "./features/randomDigit";

export const numberSlice = createSlice({
  name: 'fetchNumber',
  initialState: {
    clickedNumber: null,
    generatedNumber: randomFiveDigits()
  },
  reducers: {
    numberClicked: (state, action)=> {
      state.clickedNumber = action.payload
    }
  }
})

export const {numberClicked} = numberSlice.actions
export default numberSlice.reducer