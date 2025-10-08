import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Note = {
  id: string
  text: string
  done: boolean
}

type NotesState = {
  items: Note[]
}

const initialState: NotesState = { items: [] }

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<{ text: string }>) {
      const note: Note = { id: Date.now().toString(), text: action.payload.text, done: false }
      state.items.unshift(note)
    },
    toggleDone(state, action: PayloadAction<{ id: string }>) {
      const n = state.items.find((i) => i.id === action.payload.id)
      if (n) n.done = !n.done
    },
    removeNote(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter((i) => i.id !== action.payload.id)
    },
  },
})

export const { addNote, toggleDone, removeNote } = notesSlice.actions
export default notesSlice.reducer
