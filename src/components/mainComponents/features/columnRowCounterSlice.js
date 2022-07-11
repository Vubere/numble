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
        state.rowIsFull = !state.rowIsFull
      } else {
        state.currentColumn++
      }
    },
    deleteColumn(state) {
      if (state.rowIsFull) {
        state.rowIsFull = !state.rowIsFull
        return state
      }
      if (state.currentColumn > 0) {
        state.currentColumn--
      }
    },
    goToNewRow(state) {
      if (state.currentRow === 5) {
        state.blocksAreFull = !state.blocksAreFull
        return
      }
      state.rowIsFull = !state.rowIsFull
      state.currentRow++
      state.currentColumn = 0
    },
    changeRowIsFull: (state) => {
      state.rowIsFull = !state.rowIsFull
    },
    changeBlocksAreFull: (state) => {
      state.blocksAreFull = !state.blocksAreFull
    },
    resetCol(state){
      state.currentRow = 0
      state.currentColumn = 0
      if(state.blocksAreFull){
        state.blocksAreFull = !state.blocksAreFull
      }
      if(state.rowIsFull){
        state.rowIsFull = !state.rowIsFull
      }
    }
  },
})

export const {
  countColumnsRow,
  deleteColumn,
  goToNewRow,
  changeRowIsFull,
  changeBlocksAreFull,
  resetCol
} = columnRowCounter.actions
export default columnRowCounter.reducer
