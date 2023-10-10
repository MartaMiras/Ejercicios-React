import React from 'react';
import Age from './Age';

const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>Welcome, {name}!</p>
      {(age > 18 && age < 65) && <Age age={age} />}
    </div>
  );
};

export default Welcome;