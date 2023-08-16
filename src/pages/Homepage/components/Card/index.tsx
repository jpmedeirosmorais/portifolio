import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { Container } from "./styles";
import { Link } from "@/components/Link";

export const Card: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Container theme={theme}>
      <img src="images/profile-jp.jpg" />
      <div className="text-card">
        <p>
          Olá! Sou João Paulo, um entusiasta da programação e estudante de
          Bacharel de Engenharia de Software. Atualmente, faço parte da equipe
          de desenvolvimento da{" "}
          <Link href="https://site.themembers.com.br/">The Members</Link>, onde
          trabalho em projetos desafiadores e crio experiências digitais
          incríveis para os usuários. Com habilidades em HTML, CSS, JavaScript e
          frameworks como React e Next, busco constantemente soluções inovadoras
          e me atualizo em áreas relacionadas programação.
          <br />
          <br />
          Meu portfólio apresenta projetos recentes que demonstram minha
          habilidade em traduzir conceitos em interfaces interativas. Se você
          busca um desenvolvedor de software comprometido e apaixonado por seu
          trabalho, estou ansioso para colaborar em projetos inovadores e
          contribuir para o sucesso de sua equipe. Vamos trabalhar juntos para
          criar algo incrível!
        </p>
      </div>
    </Container>
  );
};
