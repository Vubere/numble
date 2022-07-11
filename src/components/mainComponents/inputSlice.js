import { createSlice } from '@reduxjs/toolkit'

const inputArraySlice = createSlice({
  name: 'inputArray',
  initialState: {
    rowsValidated: {},
    currentRow: 0,
    currentColumn: 0,
    validate: {},
    statistics: {
      played: 0,
      win: 0,
      currentStreak: 0,
      maxStreak: 0,
      guessDistribution: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
    },
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
      state.currentColumn++
    },
    deleteBlockValue(state, action) {
      const {
        payload: { row, column },
      } = action
      if (state.currentColumn !== 0) {
        state.currentColumn--
      }
      state[row].value[state.currentColumn].value = null
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
          state[currentRow].value[val].classes = ['inputDiv bg-green']
        })
      }
      if (similarDigitsDIffIndex.length > 0) {
        similarDigitsDIffIndex.forEach((val) => {
          state[currentRow].value[val].classes = ['inputDiv bg-yellow']
        })
      }
      state.rowsValidated[currentRow] = currentRow

      if (state.currentRow === 5) {
        state.currentRow = 0
      } else {
        state.currentRow++
      }
      state.currentColumn = 0
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
    updateStats(state) {
      if (state.validate.isValueEqual || state.currentRow === 5) {
        state.statistics.played++
        if (state.validate.isValueEqual) {
          state.statistics.win++
          state.statistics.currentStreak++
          if (state.statistics.currentStreak > state.statistics.maxStreak) {
            state.statistics.maxStreak = state.statistics.currentStreak
          }
          state.statistics.guessDistribution[state.currentRow]++
        } else {
          state.statistics.currentStreak = 0
        }
        localStorage.setItem('stats', JSON.stringify(state.statistics))
      }
    },
    setStatFromLS(state, action) {
      state.statistics = action.payload
    },
    resetInput(state){
      state.currentColumn = 0
      state.currentRow = 0
      state.validate = {}
      state.rowsValidated = {}
      for(let i=0; i<6; i++){
        state[i].classes = ['inputRow']
        for(let j=0; j<5; j++){
          state[i].value[j].value = null
          state[i].value[j].classes = ['inputDiv']
        }
      }
    },
    resetStats(state){
      state.statistics = {
        played: 0,
        win: 0,
        currentStreak: 0,
        maxStreak: 0,
        guessDistribution: {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        },
      }
      localStorage.removeItem('stats')
    }
  },
})

export const {
  updateBlockValue,
  deleteBlockValue,
  updateClasses,
  updateValidation,
  updateStats,
  setStatFromLS,
  resetInput,
  resetStats
} = inputArraySlice.actions
export default inputArraySlice.reducer
