import { useState, useEffect } from 'react';

function useGithubUser(username) {
  const [state, setState] = useState({
    userData: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch user data for ${username}`);
        }
        return response.json();
      })
      .then((data) => {
        setState({ userData: data, loading: false, error: null });
      })
      .catch((error) => {
        setState({ userData: null, loading: false, error });
        console.error(error);
      });
  }, [username]);

  const fetchData = () => {
    setState({ ...state, loading: true });
  };

  return {
    user: state.userData,
    error: state.error,
    loading: state.loading,
    fetchData,
  };
}

export default useGithubUser;
