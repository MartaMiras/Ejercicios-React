import React, { useState, useEffect } from 'react';

function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Define the GitHub API URL for the user
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

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
      </div>
      <div>
        <p>Name: {userData.name || 'Not available'}</p>
        <p>Login: {userData.login}</p>
      </div>
    </div>
  );
}

export default GithubUser;
