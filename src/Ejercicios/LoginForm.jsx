import React from 'react';
import useForm from './useForm';

function LoginForm() {
  const { username, password, handleUsernameChange, handlePasswordChange } = useForm();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Username: ', username);
    console.log('Password: ', password);
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
