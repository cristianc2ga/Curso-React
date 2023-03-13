import React, { useCallback, useState } from 'react'
import { useCounter } from '../hooks'
import ShowIncrement from './ShowIncrement';

const CallBackHook = () => {
    const [ counter, setCounter ] = useState(10);

    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value );
      },
      [],
    )
    
    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }
  return (
    <>
      <h1> useCallback hook: { counter }</h1>

      <ShowIncrement increment={ incrementFather }/>
    </>
  )
}

export default CallBackHook
