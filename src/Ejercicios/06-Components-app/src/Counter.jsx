// Counter.js
import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
  };

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default Counter;
