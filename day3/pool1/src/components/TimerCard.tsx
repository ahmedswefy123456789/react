import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { start, pause, reset, tick } from '../features/timer/timerSlice'

export default function TimerCard() {
  const dispatch = useAppDispatch()
  const seconds = useAppSelector((s) => s.timer.seconds)
  const running = useAppSelector((s) => s.timer.running)
  const ref = useRef<number | null>(null)

  useEffect(() => {
    if (running) {
      ref.current = window.setInterval(() => dispatch(tick()), 1000)
    } else {
      if (ref.current) {
        clearInterval(ref.current)
        ref.current = null
      }
    }
    return () => {
      if (ref.current) clearInterval(ref.current)
    }
  }, [running, dispatch])

  return (
    <div className="card">
      <h3>Timer</h3>
      <div className="timer-value">{seconds}s</div>
      <div className="row">
        <button onClick={() => dispatch(start())} disabled={running}>Start</button>
        <button onClick={() => dispatch(pause())} disabled={!running}>Pause</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}
