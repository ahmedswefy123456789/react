import React, { useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { login } from '../features/auth/authSlice'

const PREDEF = { username: 'admin', password: 'password' }

export default function Login() {
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (username === PREDEF.username && password === PREDEF.password) {
      dispatch(login({ username }))
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="centered">
      <form className="card login" onSubmit={submit}>
        <h2>Login</h2>
        <label>
          Username
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
