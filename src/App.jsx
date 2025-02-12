import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  // Récupérer le thème depuis localStorage au montage
  const savedTheme = localStorage.getItem('theme') === 'dark';
  const [isDarkMode, setIsDarkMode] = useState(savedTheme);

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Appliquer le thème au body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <MainContent isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;