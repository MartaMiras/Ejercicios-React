import useSWR from 'swr';

function useGithubUser(username) {
  if (username === null) {
    return {
      user: null,
      error: null,
      loading: false,
      refetch: () => {}, // A dummy function when username is null
    };
  }

  const apiUrl = `https://api.github.com/users/${username}`;

  const { data: user, error, isValidating: loading, revalidate: refetch } = useSWR(
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
    refetch,
  };
}

export default useGithubUser;
