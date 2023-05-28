import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { Container } from "./styles";

export const Card: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Container theme={theme}>
      <img src="images/profile-jp.jpg" />
      <div className="text-card">
        <p>
          Lorem ipsum dolor sit amet. Nihil quidem vel assumenda enim a
          recusandae consectetur. Sed optio facilis et quis voluptas a adipisci
          iure sed quibusdam mollitia. Aut unde eveniet quo dolorum dolorem vel
          laborum natus. Est tempore architecto non magni numquam quo numquam
          mollitia aut similique sint qui quis quod est enim rerum.
        </p>
      </div>
    </Container>
  );
};
