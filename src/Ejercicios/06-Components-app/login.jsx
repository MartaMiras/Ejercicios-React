import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember:', remember);

    // Call onLogin prop
    onLogin({ username, password, remember });
  };

  const handleReset = () => {
    // Clear the content of all three inputs
    setUsername('');
    setPassword('');
    setRemember(false);
  };

  // Determine background color based on password length
  const buttonBackgroundColor = password.length < 8 ? 'red' : 'green';

  // Disable the login button if username or password is empty
  const isLoginDisabled = !username || !password;

  const buttonStyle = {
    backgroundColor: buttonBackgroundColor,
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={handleRememberChange}
          />
          Remember me
        </label>
      </div>

      <button type="submit" disabled={isLoginDisabled} style={buttonStyle}>
        Login
      </button>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Login;
