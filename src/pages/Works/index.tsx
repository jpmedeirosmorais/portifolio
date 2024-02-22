import React from "react";
import { Card } from "./components/Card";
import { experiences } from "./constants/experience";
import { WorksContainer, Experiences } from "./styles";

export const Works: React.FC = () => {
  return (
    <WorksContainer>
      <h1>Meus Trabalhos, Projetos e Experiências</h1>

      <Experiences>
        {experiences.map((experience, index) => (
          <Card {...experience} key={index} />
        ))}
      </Experiences>
    </WorksContainer>
  );
};
