import React, { useState } from 'react';
import Counter from './Counter';

function App() {
  const [currentTime, setTime] = useState('');

  const handleClick = () => {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  };

  return (
    <div>
      <AlertClock currentTime={currentTime} setTime={setTime} />
      {/* Pasar el valor inicial y la cantidad de incremento como accesorios */}
      <Counter initialValue={0} incrementAmount={1} />
    </div>
  );
}

export default App;
