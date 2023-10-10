import React, { useState } from 'react';
import AlertClock from './AlertClock';

function App() {
  const [currentTime, setTime] = useState('');

  const handleClick = () => {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  };

  return (
    <div>
      <AlertClock currentTime={currentTime} setTime={setTime} />
    </div>
  );
}

export default App;