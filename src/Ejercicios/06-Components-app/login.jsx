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

    // Call the onLogin prop
    onLogin({ username, password, remember });
  };

  const handleReset = () => {
    // Clear the content of all three inputs
    setUsername('');
    setPassword('');
    setRemember(false);
  };

  // Disable the login button if username or password is empty
  const isLoginDisabled = !username || !password;

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

      <button type="submit" disabled={isLoginDisabled}>
        Login
      </button>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Login;


// El evento onSubmit se adjunta al elemento <form> y llama a la función handleSubmit.
// En la función handleSubmit, event.preventDefault() se utiliza para evitar el comportamiento
// de envío de formulario predeterminado, lo que provocaría una actualización de la página.
// En cambio, registra los datos del formulario (nombre de usuario, contraseña, recordar) y
// llama al accesorio onLogin con estos datos.
// El botón de inicio de sesión ahora es un elemento <button type="submit"> y al hacer clic
// en él se activará el envío del formulario, invocando la función handleSubmit.