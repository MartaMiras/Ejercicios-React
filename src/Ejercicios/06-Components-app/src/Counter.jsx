import React, { useState, useEffect, useRef } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initialValue, incrementAmount, decrementAmount }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef('initial');

  const incrementCounter = () => {
    const newValue = counter + incrementAmount;
    setCounter(newValue);
    directionRef.current = newValue > counter ? 'up' : 'down';
  };

  const decrementCounter = () => {
    const newValue = counter - decrementAmount;
    setCounter(newValue);
    directionRef.current = newValue < counter ? 'down' : 'up';
  };

  const resetCounter = () => {
    setCounter(initialValue);
    directionRef.current = 'initial';
  };

  useEffect(() => {
    console.log(`Counter value: ${counter}`);
    if (directionRef.current !== 'initial') {
      console.log(`Direction: ${directionRef.current}`);
    }
  }, [counter]);

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default Counter;
