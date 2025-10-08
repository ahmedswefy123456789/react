import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TimerState = {
  seconds: number
  running: boolean
}

const initialState: TimerState = { seconds: 0, running: false }

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start(state) {
      state.running = true
    },
    pause(state) {
      state.running = false
    },
    reset(state) {
      state.seconds = 0
      state.running = false
    },
    tick(state) {
      state.seconds += 1
    },
    set(state, action: PayloadAction<number>) {
      state.seconds = action.payload
    },
  },
})

export const { start, pause, reset, tick, set } = timerSlice.actions
export default timerSlice.reducer
