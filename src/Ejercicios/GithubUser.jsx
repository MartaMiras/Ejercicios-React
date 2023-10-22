import React from 'react';
import useGithubUser from './useGithubUser';

function GithubUser({ username }) {
  const { user, error, loading, fetchData } = useGithubUser(username);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
      </div>
      <div>
        <p>Name: {user.name || 'Not available'}</p>
        <p>Login: {user.login}</p>
      </div>
      <button onClick={fetchData}>Refresh Data</button>
    </div>
  );
}

export default GithubUser;
