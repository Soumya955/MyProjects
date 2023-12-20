import React from 'react'
import { useCounter } from './CreateCustomHooks';

export default function UseCustomHooks() {
    const { count, increment, decrement, reset } = useCounter(0, 1);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
  