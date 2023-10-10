import React from 'react';
import Hello from '../06-Components-app/src/Hello.jsx';
import Message from './Message';
import Welcome from './Welcome';

const App = () => {
  return (
    <div>
      <Welcome name="John" age={30} />
    </div>
  );
};

export default App;