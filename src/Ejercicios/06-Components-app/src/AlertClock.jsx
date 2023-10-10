import React from 'react';

const AlertClock = ({ currentTime, setTime }) => {
  const handleClick = () => {
    const time = new Date().toLocaleTimeString();
    setTime(time);
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