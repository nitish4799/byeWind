import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './uiSlice'
import ordersReducer from './orderSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
