import { createSlice } from '@reduxjs/toolkit'
import randomFiveDigits from './features/randomDigit'

export const numberSlice = createSlice({
  name: 'fetchNumber',
  initialState: {
    clickedNumber: null,
    clickedNumberArray: [],
    inputedNumber: 0,
    validate: {},
    generatedNumber: randomFiveDigits(),
  },
  reducers: {
    numberClicked: (state, action) => {
      state.clickedNumber = action.payload
      if (state.clickedNumberArray.length === 5) {
        state.clickedNumberArray = []
      }
      state.clickedNumberArray.push(action.payload)
    },
  },
})

export const { numberClicked} = numberSlice.actions
export default numberSlice.reducer
