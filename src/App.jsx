import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage"; // Importez ProjectsPage
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
    <Router>
      <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <Header
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          language={language}
          toggleLanguage={toggleLanguage}
        />

        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />
          <Route path="/projects" element={<ProjectsPage language={language} />} /> {/* Ajout de la route pour ProjectsPage */}
        </Routes>

        <Footer isDarkMode={isDarkMode} language={language} />
      </div>
    </Router>
  );
};

export default App;