import React, { useState } from 'react';
import Welcome from './Welcome';

function InteractiveWelcome() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={handleInputChange}
      />

      <Welcome name={inputValue} />
    </div>
  );
}

export default InteractiveWelcome;
