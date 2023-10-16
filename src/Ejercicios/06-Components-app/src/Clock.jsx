import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Función que actualiza la hora actual
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    // Establecer un intervalo que llame a updateTime cada segundo
    const intervalId = setInterval(updateTime, 1000);

    // Limpieza: detener el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El efecto se ejecuta solo en el montaje inicial

  return (
    <div>
      <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
