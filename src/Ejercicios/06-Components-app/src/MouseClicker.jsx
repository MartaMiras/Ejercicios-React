import React from 'react';

function MouseClicker({ name }) {
  const handleClick = (event) => {
    // Access the name attribute of the button
    console.log(`Button clicked: ${event.currentTarget.getAttribute('name')}`);
  };

  return (
    <div>
      <button name={name} onClick={handleClick}>
        Click me
        <img
          src="image.jpg"  // Replace with your image
          style={{ marginLeft: '5px' }}  // Add some spacing between the text and image
        />
      </button>
    </div>
  );
}

export default MouseClicker;
