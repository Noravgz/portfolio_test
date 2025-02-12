import React from 'react';

const MainContent = () => {
  return (
    <main>
      <section>
        <h2>Bonjour, je m'appelle John Doe. Bienvenue sur mon portfolio !</h2>
        <p>
          Depuis quelques mois, j'apprends le développement web grâce à The Hacking Project. J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.
        </p>
      </section>

      <section>
        <h3>Mes projets</h3>
        <p>Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.</p>
        <div>
          <h4>Projet 1</h4>
          <img src="https://via.placeholder.com/150" alt="Projet 1" />
          <p>Description du projet 1.</p>
        </div>
        <div>
          <h4>Projet 2</h4>
          <img src="https://via.placeholder.com/150" alt="Projet 2" />
          <p>Description du projet 2.</p>
        </div>
        <div>
          <h4>Projet 3</h4>
          <p>Description du projet 3.</p>
        </div>
      </section>

      <section>
        <h3>Contact</h3>
        <p>
          Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.
        </p>
        <form>
          <input type="text" placeholder="Sujet" />
          <textarea placeholder="Votre message"></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </main>
  );
};

export default MainContent;