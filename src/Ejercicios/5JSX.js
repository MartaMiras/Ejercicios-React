import React from 'react';
import SumInH2Tag from './SumInH2Tag'; 

function App() {
  const a = 5;
  const b = 7;

  return (
    <div>
      <h1>Sum of a and b</h1>
      <SumInH2Tag a={a} b={b} />
    </div>
  );
}

export default App;
