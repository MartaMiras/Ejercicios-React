import React from 'react';
import useGithubUser from './useGithubUser';

function GithubUser({ username }) {
  const userData = useGithubUser(username);

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
