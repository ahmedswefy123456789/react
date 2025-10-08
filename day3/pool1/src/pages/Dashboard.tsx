import {} from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logout } from '../features/auth/authSlice';
import CounterCard from '../components/CounterCard'
import TimerCard from "../components/TimerCard"
import NotesCard from "../components/NotesCard"
import UsersCard from "../components/UsersCard"

export default function Dashboard() {
  const dispatch = useAppDispatch()
  const username = useAppSelector((s) => s.auth.username)

  return (
    <div className="dashboard-root">
      <header className="header">
        <h1>Dashboard</h1>
        <div>
          <span className="username">{username}</span>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      </header>
      <main className="cards-grid">
        <CounterCard />
        <TimerCard />
        <NotesCard />
        <UsersCard />
      </main>
    </div>
  )
}
