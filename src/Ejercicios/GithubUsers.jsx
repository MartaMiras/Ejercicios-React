import React, { useState, useEffect } from 'react';

function GithubUser({ username }) {
  // Code for GithubUser component (as provided in the previous response)
}

function GithubUsers() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch a list of GitHub users
    fetch('https://api.github.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then((data) => {
        setUserList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleUserClick = (username) => {
    setSelectedUser(username);
  };

  return (
    <div>
      <h2>Github Users</h2>
      <ul>
        {userList.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.login)}>
            {user.login}
          </li>
        ))}
      </ul>
      {selectedUser && <GithubUser username={selectedUser} />}
    </div>
  );
}

export default GithubUsers;
