import { createSlice } from '@reduxjs/toolkit/'

const columnRowCounter = createSlice({
  name: 'columnRowCounter',
  initialState: {
    currentRow: 0,
    currentColumn: 0,
    blocksAreFull: false,
    rowIsFull: false,
  },
  reducers: {
    countColumnsRow(state) {
      if (state.currentColumn === 4) {
        if (state.currentRow === 5) {
          state.currentRow = 0
          state.blocksAreFull = !state.blocksAreFull
        } else {
          state.rowIsFull = !state.rowIsFull
          state.currentRow++
        }
        state.currentColumn = 0
      } else {
        state.currentColumn++
      }
    },
    changeRowIsFull: (state) => {
      state.rowIsFull = !state.rowIsFull
    },
    changeColumnIsFull: (state) => {
      state.columnIsFull = !state.columnIsFull
    },
  },
})

export const { countColumnsRow, changeColumnIsFull, changeRowIsFull } =
  columnRowCounter.actions
export default columnRowCounter.reducer
