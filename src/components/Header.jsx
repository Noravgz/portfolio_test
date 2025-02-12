import React from 'react';

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className={isDarkMode ? 'dark-mode' : 'light-mode'}>
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
  );
};

export default Header;