import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import MainContent from "./components/MainContent.jsx";
import Footer from './components/Footer.jsx';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
