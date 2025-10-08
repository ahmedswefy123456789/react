import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { ActionReducerMapBuilder } from '@reduxjs/toolkit'

type User = {
  id: number
  name: string
  email: string
}

type UsersState = {
  items: User[]
  loading: boolean
  error: string | null
}

const initialState: UsersState = { items: [], loading: false, error: null }

export const fetchUsers = createAsyncThunk<User[]>('users/fetchAll', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) throw new Error(`Error ${res.status}`)
  return (await res.json()) as User[]
})

export const fetchUserById = createAsyncThunk<User[], string>('users/fetchById', async (id: string) => {
  if (!id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) throw new Error(`Error ${res.status}`)
    return (await res.json()) as User[]
  }
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  if (res.status === 404) return [] as User[]
  if (!res.ok) throw new Error(`Error ${res.status}`)
  const u = (await res.json()) as User
  return [u]
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<UsersState>) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Unknown error'
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Unknown error'
      })
  },
})

export default usersSlice.reducer
