import {} from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { increment, reset } from '../features/counter/counterSlice'

export default function CounterCard() {
  const dispatch = useAppDispatch()
  const value = useAppSelector((s) => s.counter.value)

  return (
    <div className="card">
      <h3>Counter</h3>
      <div className="counter-value">{value}</div>
      <div className="row">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset(undefined))}>Reset</button>
      </div>
    </div>
  )
}
