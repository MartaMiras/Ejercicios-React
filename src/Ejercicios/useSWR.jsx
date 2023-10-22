const customFetcher = async (...args) => {
  const response = await fetch(...args);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher: customFetcher }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);
