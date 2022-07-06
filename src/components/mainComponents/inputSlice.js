import { createSlice } from "@reduxjs/toolkit";

const inputArraySlice = createSlice({
  name: "inputArray",
  initialState: {
    0:{
      0: null,
      1: null,
      2: null,
      3: null,
      4: null
    },
    1:{
      0: null,
      1: null,
      2: null,
      3: null,
      4: null
    },
    2:{
      0: null,
      1: null,
      2: null,
      3: null,
      4: null
    },
    3:{
      0: null,
      1: null,
      2: null,
      3: null,
      4: null
    },
    4:{
      0: null,
      1: null,
      2: null,
      3: null,
      4: null
    },
    5:{
      0: null,
      1: null,
      2: null,
      3: null,
      4: null
    },
  },
  reducers: {
    updateBlockValue(state, action){
      state[action.payload.row][action.payload.column] = action.payload.value
    }
  }
})

export const {addBlock, updateBlockValue} = inputArraySlice.actions
export default inputArraySlice.reducer
