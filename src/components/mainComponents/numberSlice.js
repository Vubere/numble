import { createSlice } from '@reduxjs/toolkit'
import randomFiveDigits from './features/randomDigit'

export const numberSlice = createSlice({
  name: 'fetchNumber',
  initialState: {
    clickedNumber: null,
    clickedNumberArray: [],
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
    removeNumber(state) {
      if (state.clickedNumberArray.length > 0) {
        state.clickedNumberArray.pop()
      }
    },
    resetNum(state) {
      state.clickedNumber = null
      state.clickedNumberArray = []
      state.generatedNumber = randomFiveDigits()
    },
  },
})

export const { numberClicked, removeNumber, resetNum } = numberSlice.actions
export default numberSlice.reducer
