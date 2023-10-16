import React, { useState } from 'react';
import Counter from './Counter';
import MouseClicker from './MouseClicker';
import MultiButton from './MultiButton';

function App() {
  const [currentTime, setTime] = useState('');

  const handleClick = () => {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  };

  return (
    <div>
      <Counter initialValue={0} incrementAmount={1} decrementAmount={1} />
      <MouseClicker name="one" />
      <MultiButton />
    </div>
  );
}

export default App;
