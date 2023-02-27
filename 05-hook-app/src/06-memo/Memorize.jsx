import { useCounter } from "../hooks"

const Memorize = () => {

   const {counter, increment} = useCounter(10);
  return (
    <>
      <h1>Counter: <small>{counter}</small></h1>
      <hr/>

      <button onClick={()=> increment()} className="btn btn-primary">+1</button>
    </>
  )
}

export default Memorize
