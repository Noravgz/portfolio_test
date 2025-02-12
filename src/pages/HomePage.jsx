import React from "react";
import translations from "../translations";
import { Link } from "react-router-dom";

const HomePage = ({ language }) => {
  return (
    <main className="home-page">
      <section>
        <h2>{translations[language].welcome}</h2>
        <p>{translations[language].description}</p>
      </section>

      <div className="main-page-cards"> {/* CHANGEMENT DE .main-page-links en .main-page-cards */}
        <Link to="/contact" className="card-link">  {/* Ajout de la classe .card-link */}
          <div className="card"> {/* Ajout d'une div .card */}
            {translations[language].contact}
          </div>
        </Link>

        <Link to="/projects" className="card-link">  {/* Ajout de la classe .card-link */}
          <div className="card"> {/* Ajout d'une div .card */}
            {translations[language].projects}
          </div>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;