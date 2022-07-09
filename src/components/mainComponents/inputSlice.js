import { createSlice } from '@reduxjs/toolkit'

const inputArraySlice = createSlice({
  name: 'inputArray',
  initialState: {
    currentRow: 0,
    rowsValidated: {},
    validate: {},
    0: {
      value: {
        0: {
          value: null,
          classes: ['inputDiv'],
        },
        1: {
          value: null,
          classes: ['inputDiv'],
        },
        2: {
          value: null,
          classes: ['inputDiv'],
        },
        3: {
          value: null,
          classes: ['inputDiv'],
        },
        4: {
          value: null,
          classes: ['inputDiv'],
        },
      },
      classes: ['inputRow'],
    },
    1: {
      value: {
        0: {
          value: null,
          classes: ['inputDiv'],
        },
        1: {
          value: null,
          classes: ['inputDiv'],
        },
        2: {
          value: null,
          classes: ['inputDiv'],
        },
        3: {
          value: null,
          classes: ['inputDiv'],
        },
        4: {
          value: null,
          classes: ['inputDiv'],
        },
      },
      classes: ['inputRow'],
    },
    2: {
      value: {
        0: {
          value: null,
          classes: ['inputDiv'],
        },
        1: {
          value: null,
          classes: ['inputDiv'],
        },
        2: {
          value: null,
          classes: ['inputDiv'],
        },
        3: {
          value: null,
          classes: ['inputDiv'],
        },
        4: {
          value: null,
          classes: ['inputDiv'],
        },
      },
      classes: ['inputRow'],
    },
    3: {
      value: {
        0: {
          value: null,
          classes: ['inputDiv'],
        },
        1: {
          value: null,
          classes: ['inputDiv'],
        },
        2: {
          value: null,
          classes: ['inputDiv'],
        },
        3: {
          value: null,
          classes: ['inputDiv'],
        },
        4: {
          value: null,
          classes: ['inputDiv'],
        },
      },
      classes: ['inputRow'],
    },
    4: {
      value: {
        0: {
          value: null,
          classes: ['inputDiv'],
        },
        1: {
          value: null,
          classes: ['inputDiv'],
        },
        2: {
          value: null,
          classes: ['inputDiv'],
        },
        3: {
          value: null,
          classes: ['inputDiv'],
        },
        4: {
          value: null,
          classes: ['inputDiv'],
        },
      },
      classes: ['inputRow'],
    },
    5: {
      value: {
        0: {
          value: null,
          classes: ['inputDiv'],
        },
        1: {
          value: null,
          classes: ['inputDiv'],
        },
        2: {
          value: null,
          classes: ['inputDiv'],
        },
        3: {
          value: null,
          classes: ['inputDiv'],
        },
        4: {
          value: null,
          classes: ['inputDiv'],
        },
      },
      classes: ['inputRow'],
    },
  },
  reducers: {
    updateBlockValue(state, action) {
      const {
        payload: { row, column, value },
      } = action
      state[row].value[column].value = value
    },
    updateClasses(state) {
      const {
        validate: {
          isValueEqual,
          isValueGreater,
          isValueLesser,
          similarIndexes,
          similarDigitsDIffIndex,
        },
        currentRow,
      } = state
      if (isValueEqual) {
        state[currentRow].classes = ['inputRow green']
      } else if (isValueGreater) {
        state[currentRow].classes = ['inputRow red']
      } else if (isValueLesser) {
        state[currentRow].classes = ['inputRow white']
      }
      if (similarIndexes.length > 0) {
        similarIndexes.forEach((val) => {
          state[currentRow].value[val].classes = ['inputDiv green']
        })
      }
      if (similarDigitsDIffIndex.length > 0) {
        similarDigitsDIffIndex.forEach((val) => {
          state[currentRow].value[val].classes = ['inputDiv yellow']
        })
      }
      state.rowsValidated[currentRow] = currentRow

      if (state.currentRow === 5) {
        state.currentRow = 0
      } else {
        state.currentRow++
      }
    },
    updateValidation(state, action) {
      const { generatedNumber, clickedNumberArray: inputArray } = action.payload

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
      let similarDigits = []
      genNumArr.forEach((val, i) => {
        if (inputArray.includes(Number(val))) {
          let index = inputArray.indexOf(Number(val))
          if (similarDigits[index]) {
            index = inputArray.lastIndexOf(Number(val))
          }
          if (i !== index) {
            similarDigits.push(index)
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

export const { addBlock, updateBlockValue, updateClasses, updateValidation } =
  inputArraySlice.actions
export default inputArraySlice.reducer
