
import { useAppSelector } from './store/hooks'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  const loggedIn = useAppSelector((s) => s.auth.loggedIn)
  return loggedIn ? <Dashboard /> : <Login />
}

export default App
