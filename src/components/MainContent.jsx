import React from "react";
import translations from "../translations";

const MainContent = ({ isDarkMode, language }) => {
  return (
    <main className={isDarkMode ? "dark-mode" : "light-mode"}>
      <section>
        <h2>{translations[language].welcome}</h2>
        <p>{translations[language].description}</p>
      </section>

      <section>
        <h3>{translations[language].projects}</h3>
        <div>
          <h4>Projet 1</h4>
          <p>{translations[language].project1}</p>
        </div>
        <div>
          <h4>Projet 2</h4>
          <p>{translations[language].project2}</p>
        </div>
        <div>
          <h4>Projet 3</h4>
          <p>{translations[language].project3}</p>
        </div>
      </section>

      <section>
        <h3>{translations[language].contact}</h3>
        <p>{translations[language].contactText}</p>
        <form>
          <input type="text" placeholder="Sujet" />
          <textarea placeholder="Votre message"></textarea>
          <button type="submit">{translations[language].send}</button>
        </form>
      </section>
    </main>
  );
};

export default MainContent;
