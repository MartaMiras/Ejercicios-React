import React from 'react';

function MouseClicker({ name }) {
  const handleClick = (event) => {
    // Access the event.target.name property to get the name prop
    console.log(`Button clicked: ${event.target.name}`);
  };

  return (
    <div>
      <button name={name} onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default MouseClicker;
