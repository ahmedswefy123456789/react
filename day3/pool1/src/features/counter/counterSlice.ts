import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type CounterState = {
  value: number
}

const initialState: CounterState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
    },
    reset(state, action: PayloadAction<number | undefined>) {
      state.value = action.payload ?? 0
    },
  },
})

export const { increment, reset } = counterSlice.actions
export default counterSlice.reducer
