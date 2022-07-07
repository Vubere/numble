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
    submitClicked(state, action) {
      const { generatedNumber, clickedNumberArray: inputArray } = state

      let inputedNumber = Number(inputArray.join(''))

      let genNumArr = generatedNumber.toString().split('')
      let similarIndex = []
      genNumArr.filter((val, i) => {
        let bool = Number(val) === inputArray[i]
        if (bool) {
          similarIndex.push(i)
        }
        return bool
      })
      let similarDigits = {}
      genNumArr.forEach((val, i) => {
        if (inputArray.includes(Number(val))) {
          let index = inputArray.indexOf(Number(val))
          if (similarDigits[index]) {
            index = inputArray.lastIndexOf(Number(val))
          }
          if (i !== index) {
            similarDigits[index] = Number(val)
          }
        }
      })
      state.validate = {
        isValueEqual: inputedNumber === generatedNumber,
        isValueGreater: inputedNumber > generatedNumber,
        isValueLesser: inputedNumber < generatedNumber,
        similarIndexes: similarIndex,
        similarDigitsDIffIndex: similarDigits,
      }
    },
  },
})

export const { numberClicked, submitClicked} = numberSlice.actions
export default numberSlice.reducer
