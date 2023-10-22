import { useState, useEffect } from 'react';

function useGithubUser(username) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.github.com/users/${username}`;

    // Fetch user data from the GitHub API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch user data for ${username}`);
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username]);

  return userData;
}

export default useGithubUser;
