import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchUsers, fetchUserById } from '../features/users/usersSlice'

export default function UsersCard() {
  const dispatch = useAppDispatch()
  const { items, loading, error } = useAppSelector((s) => s.users)
  const [id, setId] = useState('')

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  async function onFetch(e?: React.FormEvent) {
    e?.preventDefault()
    if (!id.trim()) {
      dispatch(fetchUsers())
    } else {
      dispatch(fetchUserById(id.trim()))
    }
  }

  return (
    <div className="card users-card">
      <h3>Users</h3>
      <form onSubmit={onFetch} className="row">
        <input placeholder="User id (optional)" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="submit">Fetch</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {!loading && items.length === 0 && <div>Not found</div>}
      <ul>
        {items.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong>
            <div>{u.email}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
