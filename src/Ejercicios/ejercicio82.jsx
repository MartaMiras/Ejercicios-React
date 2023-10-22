// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="YourName" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
