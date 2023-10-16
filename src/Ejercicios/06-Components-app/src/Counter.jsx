import React, { useState, useEffect } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initialValue, incrementAmount, decrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
  };

  const decrementCounter = () => {
    setCounter(counter - decrementAmount);
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };

  // useEffect para imprimir el valor actual del contador en la consola
  useEffect(() => {
    console.log(`Counter value: ${counter}`);
  }, [counter]); // El efecto se ejecutará cada vez que el valor de 'counter' cambie

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
