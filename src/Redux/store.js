// Redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'  // Make sure the import path is correct

export const store = configureStore({
  reducer: {
    counter: CounterSlice,  // CounterSlice reducer should be assigned here
  },
})
