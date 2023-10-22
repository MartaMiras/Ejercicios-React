import React from 'react';
import useCurrentLocation from './useCurrentLocation';

function LocationComponent() {
  const { location, error, loading, fetchLocation } = useCurrentLocation();

  return (
    <div>
      <h2>Current Location</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
      <button onClick={fetchLocation}>Get Current Location</button>
    </div>
  );
}

export default LocationComponent;
