import React from 'react';
import Hello from '../06-Components-app/src/Hello.jsx';
import Message from './Message';

const App = () => {
  return (
    <div>
      <Hello />
      <Message name="John" />
    </div>
  );
};

export default App;