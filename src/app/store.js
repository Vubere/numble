import { configureStore } from '@reduxjs/toolkit'
import numberReducer from '../components/mainComponents/numberSlice'

export default configureStore({
  reducer: {
    numberFetch: numberReducer
  }
})
