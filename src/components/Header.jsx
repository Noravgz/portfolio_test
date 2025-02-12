import React from "react";
import translations from "../translations";

const Header = ({ isDarkMode, toggleTheme, language, toggleLanguage }) => {
  return (
    <header className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>{translations[language].title}</h1>
      
      {/* Conteneur pour GitHub et les boutons */}
      <div className="header-buttons">
        <a href="https://github.com/Noravgz" target="_blank" rel="noopener noreferrer">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            width="30"
          />
        </a>
        
        <button onClick={toggleTheme}>
          {isDarkMode ? "Mode Jour" : "Mode Nuit"}
        </button>
        <button onClick={toggleLanguage}>
          {language === "fr" ? "EN" : "FR"}
        </button>
      </div>
    </header>
  );
};

export default Header;
