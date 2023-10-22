import React from 'react';

function Color({ color }) {
  return <li>{color.name}</li>;
}

function Colors({ items }) {
  return (
    <ul>
      {items.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}

export default Colors;
