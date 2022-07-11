import { configureStore } from '@reduxjs/toolkit'
import numberSlice from '../components/mainComponents/numberSlice'
import inputSlice from '../components/mainComponents/inputSlice'
import columnRowCounterSlice from '../components/mainComponents/features/columnRowCounterSlice'


export default configureStore({
  reducer: {
    numberFetch: numberSlice,
    inputArray: inputSlice,
    columnRowCounter: columnRowCounterSlice,
  }
})
