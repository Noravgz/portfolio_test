import React from "react";
import translations from "../translations";

const ProjectsPage = ({ language }) => {
  return (
    <div>
      <h2>{translations[language].projects}</h2>
      <p>{translations[language].project1}</p>
      <p>{translations[language].project2}</p>
      <p>{translations[language].project3}</p>
    </div>
  );
};

export default ProjectsPage;