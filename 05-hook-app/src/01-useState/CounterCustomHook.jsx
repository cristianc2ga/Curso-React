import { useCounter } from "../hooks/useCounter"

export const CounterCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter with custom Hook: {counter}</h1>
      <hr/>
      <button onClick={() => increment(2)} className="btn btn-success">+1</button>
      <button onClick={reset} className="btn btn-danger">Reset</button>
      <button onClick={() => decrement(2)} className="btn btn-primary">-1</button>
    </>
  )
}

