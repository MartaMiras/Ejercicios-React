import React from 'react';

const Message = ({ name, age }) => {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <p>Your age is {age}.</p>
    </div>
  );
};

export default Message;
