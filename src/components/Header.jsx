import React, { useState, useEffect } from 'react';

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

  // Appliquer le thème au body ou à la racine de l'application
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div>
      <header>
        <h1>Portfolio de John Doe</h1>
        <a href="https://github.com/Noravgz" target="_blank" rel="noopener noreferrer">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            width="30"
          />
        </a>
        <button onClick={toggleTheme}>
          {isDarkMode ? 'Mode Jour' : 'Mode Nuit'}
        </button>
      </header>
      {/* Le reste de votre application */}
    </div>
  );
};

export default App;