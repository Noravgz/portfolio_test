import React from "react";
import translations from "../translations";

const Footer = ({ isDarkMode, language }) => {
  return (
    <footer className={isDarkMode ? "dark-mode" : "light-mode"}>
      <p>&copy; 2025 John Doe. {translations[language].footer}</p>
    </footer>
  );
};

export default Footer;
