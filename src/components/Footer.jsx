import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <p>&copy; 2023 John Doe. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;