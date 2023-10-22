import React from 'react';
import Colors from './Colors';

function App() {
  const colorList = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
    { id: 4, name: 'Yellow' },
    { id: 5, name: 'Purple' },
  ];

  return (
    <div className="App">
      <h1>Color List</h1>
      <Colors items={colorList} />
    </div>
  );
}

export default App;
