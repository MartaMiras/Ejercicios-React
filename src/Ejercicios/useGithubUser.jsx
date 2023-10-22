import useSWR from 'swr';

function useGithubUser(username) {
  if (username === null) {
    return {
      user: null,
      error: null,
      loading: false,
      refetch: () => {},
    };
  }

  const apiUrl = `https://api.github.com/users/${username}`;

  const { data: user, error, isValidating: loading, revalidate: refetch } = useSWR(apiUrl);

  return {
    user,
    error,
    loading,
    refetch,
  };
}

export default useGithubUser;
