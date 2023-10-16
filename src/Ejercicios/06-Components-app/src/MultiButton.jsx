import React from 'react';

function MultiButton() {
  const handleClick = (event) => {
    console.log(`Button clicked: ${event.target.name}`);
  };

  return (
    <div>
      <button name="one" onClick={handleClick}>Button One</button>
      <button name="two" onClick={handleClick}>Button Two</button>
      <button name="three" onClick={handleClick}>Button Three</button>
    </div>
  );
}

export default MultiButton;
