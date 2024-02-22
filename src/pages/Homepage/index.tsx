import React from "react";
import { Card } from "./components/Card";
import { Container } from "./styles";

export const Homepage: React.FC = () => {
  return (
    <Container>
      <div className="title">
        <h1>João P M Morais - Engenheiro de software </h1>
      </div>
      <Card />
    </Container>
  );
};
