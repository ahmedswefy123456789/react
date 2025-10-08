import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
type AuthState = {
  username: string | null
  loggedIn: boolean
}

const initialState: AuthState = {
  username: null,
  loggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string }>) {
      state.username = action.payload.username
      state.loggedIn = true
    },
    logout(state) {
      state.username = null
      state.loggedIn = false
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
