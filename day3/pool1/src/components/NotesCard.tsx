import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addNote, toggleDone, removeNote } from '../features/notes/notesSlice'

export default function NotesCard() {
  const dispatch = useAppDispatch()
  const notes = useAppSelector((s) => s.notes.items)
  const [text, setText] = useState('')

  return (
    <div className="card notes">
      <h3>Notes</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!text.trim()) return
          dispatch(addNote({ text: text.trim() }))
          setText('')
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New note" />
        <button type="submit">Add</button>
      </form>
      <ul className="notes-list">
        {notes.map((n) => (
          <li key={n.id} className={n.done ? 'done' : ''}>
            <label>
              <input type="checkbox" checked={n.done} onChange={() => dispatch(toggleDone({ id: n.id }))} />
              <span>{n.text}</span>
            </label>
            <button onClick={() => dispatch(removeNote({ id: n.id }))}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
