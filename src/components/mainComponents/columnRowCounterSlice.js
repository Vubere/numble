import { createSlice } from "@reduxjs/toolkit/";

const columnRowCounter = createSlice({
  name: 'columnRowCounter',
  initialState:{
    currentRow: 0,
    currentColumn: 0,
    blocksAreFull: false
  },
  reducers:{
    countColumnsRow(state){
      if(state.currentColumn===4){
        if(state.currentRow===5){
          state.currentRow = 0
          state.blocksAreFull = !state.blocksAreFull
        }else{
          state.currentRow++
        }
        state.currentColumn=0
      }else{
        state.currentColumn++
      }
    }
  }
})

export const {countColumnsRow} = columnRowCounter.actions
export default columnRowCounter.reducer