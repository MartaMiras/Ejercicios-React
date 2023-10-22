import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const translations = {
    en: 'Current Time',
    es: 'Hora Actual', 
  };

  return (
    <div>
      <h2>{translations[language]}: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
