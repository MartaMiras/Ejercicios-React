import useSWR from 'swr';

function useGithubUser(username) {
  if (username === null) {
    return {
      user: null,
      error: null,
      loading: false,
      fetchData: () => {}, // A dummy function to maintain the same interface
    };
  }

  const apiUrl = `https://api.github.com/users/${username}`;

  const { data: user, error, isValidating: loading, mutate: fetchData } = useSWR(
    apiUrl,
    async (url) => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch user data for ${username}`);
      }

      const data = await response.json();
      return data;
    }
  );

  return {
    user,
    error,
    loading,
    fetchData,
  };
}

export default useGithubUser;
