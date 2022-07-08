import { createSlice } from "@reduxjs/toolkit";

const inputArraySlice = createSlice({
  name: "inputArray",
  initialState: {
    0:{
      value:{
        0: null,
        1: null,
        2: null,
        3: null,
        4: null
      },
      classes:["inputRow"]
    },
    1:{
      value:{
        0: null,
        1: null,
        2: null,
        3: null,
        4: null
      },
      classes:["inputRow"]
    },
    2:{
      value:{
        0: null,
        1: null,
        2: null,
        3: null,
        4: null
      },
      classes:["inputRow"]
    },
    3:{
      value:{
        0: null,
        1: null,
        2: null,
        3: null,
        4: null
      },
      classes:["inputRow"]
    },
    4:{
      value:{
        0: null,
        1: null,
        2: null,
        3: null,
        4: null
      },
      classes:["inputRow"]
    },
    5:{
      value:{
        0: null,
        1: null,
        2: null,
        3: null,
        4: null
      },
      classes:["inputRow"]
    },
  },
  reducers: {
    updateBlockValue(state, action){
      state[action.payload.row].value[action.payload.column] = action.payload.value
    },
    updateClasses(state, action){
      console.log(action)
      state[action.payload.row].classes = action.payload.value
    },
    numberClassUpdate(state, action){
      state[action.payload.id][action.payload.id] = action.payload.classUpdate
    }
  }
})

export const {addBlock, updateBlockValue, updateClasses} = inputArraySlice.actions
export default inputArraySlice.reducer
