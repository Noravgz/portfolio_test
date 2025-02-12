import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import translations from "./translations";
import "./App.css";

const App = () => {
  // Gestion du mode sombre
  const savedTheme = localStorage.getItem("theme") === "dark";
  const [isDarkMode, setIsDarkMode] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Gestion de la langue (fr/en)
  const savedLanguage = localStorage.getItem("language") || "fr";
  const [language, setLanguage] = useState(savedLanguage);

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Header 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        language={language} 
        toggleLanguage={toggleLanguage} 
      />
      <MainContent isDarkMode={isDarkMode} language={language} />
      <Footer isDarkMode={isDarkMode} language={language} />
    </div>
  );
};

export default App;
