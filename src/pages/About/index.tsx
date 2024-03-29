import React from "react";
import { Card } from "./components/Card";
import { about, moreAbout } from "./constants";
import { AboutContainer, CardsContainer } from "./styles";

export const About: React.FC = () => {
  return (
    <AboutContainer>
      <h2>Um pouco mais sobre mim...</h2>

      <CardsContainer>
        <Card id="card-about-1">
          <h3>Minha jornada até aqui</h3>
          {about.map((paragraph, key) => (
            <>
              <p key={key}>{paragraph}</p>
              <br />
            </>
          ))}
        </Card>
        <div className="left">
          <img src="images/aboutimage.jpg" />
        </div>
        <Card id="card-about-2">
          <h3>Além da programação</h3>
          {moreAbout.map((paragraph, key) => (
            <>
              <p key={key}>{paragraph}</p>
              {key >= moreAbout.length - 1 ? null : <br />}
            </>
          ))}
        </Card>
      </CardsContainer>
    </AboutContainer>
  );
};
