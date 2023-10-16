import React, { useRef } from 'react';

function UncontrolledLogin({ onLogin }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const remember = rememberRef.current.checked;

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember:', remember);

    // Call the onLogin prop
    onLogin({ username, password, remember });
  };

  const handleReset = () => {
    // Clear the content of all three inputs using refs
    usernameRef.current.value = '';
    passwordRef.current.value = '';
    rememberRef.current.checked = false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={usernameRef}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            ref={rememberRef}
          />
          Remember me
        </label>
      </div>

      <button type="submit">
        Login
      </button>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default UncontrolledLogin;
