import { useState } from 'react';

function useForm(initialUsername = '', initialPassword = '') {
  const [username, setUsername] = useState(initialUsername);
  const [password, setPassword] = useState(initialPassword);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
  };
}

export default useForm;
