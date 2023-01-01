import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice';
import notesReducer from './notesSlice'

export const store = configureStore({
  reducer: {
    Auth: authReducer,
    Notes: notesReducer

  },
})