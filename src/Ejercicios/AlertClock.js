import React, { useState } from 'react';

const AlertClock = () => {
    const [currentTime, setCurrentTime] = useState('');
  
    const handleClick = () => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
      alert(`The current time is ${time}`);
    };
  
    return (
      <div>
        <button onClick={handleClick}>Show Current Time</button>
        <p>{currentTime}</p>
      </div>
    );
  };
  
  export default AlertClock;