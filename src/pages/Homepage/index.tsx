import React from "react";
import { Card } from "./components/Card";
import { Container } from "./styles";

export const Homepage: React.FC = () => {
  return (
    <Container>
      <div className="title">
        <h1>João P M Morais - Frontend developer </h1>
      </div>
      <Card />
    </Container>
  );
};
