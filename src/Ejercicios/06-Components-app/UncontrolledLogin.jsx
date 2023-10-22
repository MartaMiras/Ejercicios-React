import React, { useRef } from 'react';
import './tailwind.scss';

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
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-600">Username:</label>
        <input
          type="text"
          id="username"
          ref={usernameRef}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600">Password:</label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label className="flex items-center text-gray-600">
          <input
            type="checkbox"
            ref={rememberRef}
            className="mr-2"
          />
          Remember me
        </label>
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Login
      </button>

      <button type="button" onClick={handleReset} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-600 py-2 px-4 rounded">
        Reset
      </button>
    </form>
  );
}

export default UncontrolledLogin;
