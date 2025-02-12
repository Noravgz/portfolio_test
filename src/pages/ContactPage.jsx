// src/pages/ContactPage.js
import React from "react";
import translations from "../translations";

const ContactPage = ({ language }) => {
  return (
    <main className="contact-page">  {/* Ajout de la classe .contact-page au main */}
      <section>
        <h3>{translations[language].contact}</h3>
        <p>{translations[language].contactText}</p>
        <form className="contact-page form"> {/* Ajout de la classe .contact-page form au form */}
          <input type="text" placeholder="Sujet" />
          <textarea placeholder="Votre message"></textarea>
          <button type="submit">{translations[language].send}</button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;