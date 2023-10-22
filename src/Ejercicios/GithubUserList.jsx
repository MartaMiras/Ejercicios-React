const GithubUserList = () => {
    const usernames = ['user1', 'user2', 'user3'];
  
    return (
      <div>
        <h2>GitHub Users</h2>
        <ul>
          {usernames.map((username) => (
            <li key={username}>
              <Link to={`users/${username}`}>{username}</Link>
              <Route path=":username" element={<ShowGithubUser />} />
            </li>
          ))}
        </ul>
  
      </div>
    );
  };
  