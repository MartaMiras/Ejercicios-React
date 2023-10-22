import React, { useEffect, useRef, StrictMode } from 'react';

function MountedMessage() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log('Component');
      isMounted.current = true;
    }
  }, []);

  return <div> Content</div>;
}

function App() {
  return (
    <div className="App">
      <h1> Message </h1>
      <MountedMessage />
    </div>
  );
}

function Root() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

export default Root;
