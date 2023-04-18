import authSlice from '@/features/auth/auth.slice'
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

export const store = configureStore({ 

    reducer: authSlice

})



export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>