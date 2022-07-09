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
    goToNewRow(state){
      if(state.currentRow===5){
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
    changeIblockAreFull: (state) => {
      state.blockAreFull = !state.blocksAreFull
    },
  },
})

export const { countColumnsRow, goToNewRow, changeRowIsFull, changeBlocksAreFull} =
  columnRowCounter.actions
export default columnRowCounter.reducer
