import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/post/postSlice'
import usersSlice from '../features/users/usersSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersSlice
  }
})
