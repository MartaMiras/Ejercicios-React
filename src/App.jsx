import React, { useContext } from 'react';
import { LanguageProvider, LanguageContext } from './LanguageContext';
import Clock from './Clock'; // Import your Clock component

function App() {
  return (
    <LanguageProvider>
      <div>
        <LanguageSelector />
        <Clock />
      </div>
    </LanguageProvider>
  );
}

function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}

export default App;

