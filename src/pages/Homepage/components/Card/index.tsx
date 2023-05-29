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
          Olá! Sou João Paulo, um entusiasta da programação e estudante de
          Bacharel de Ciência da Computação. Atualmente, faço parte da equipe de
          desenvolvimento da The Members, onde trabalho em projetos desafiadores
          e crio experiências digitais incríveis para os usuários. Com
          habilidades em HTML, CSS, JavaScript e frameworks como React e Next,
          busco constantemente soluções inovadoras e me atualizo em áreas
          relacionadas programação.
          <br />
          <br />
          Meu portfólio apresenta projetos recentes que demonstram minha
          habilidade em traduzir conceitos em interfaces interativas. Se você
          busca um programador frontend comprometido e apaixonado por seu
          trabalho, estou ansioso para colaborar em projetos emocionantes e
          contribuir para o sucesso de sua equipe. Vamos criar algo
          extraordinário juntos!
        </p>
      </div>
    </Container>
  );
};
