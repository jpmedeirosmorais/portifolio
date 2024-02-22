import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { Container } from "./styles";
import { Link } from "@/components/Link";

export const Card: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Container theme={theme}>
      <img src="images/profile-jp.jpg" alt="João P M Morais" />
      <div className="text-card">
        <p>
          Olá, sou João Paulo, um entusiasta da programação com interesse
          especial em ciências e no universo geek. Atualmente, atuo como
          Desenvolvedor de Software na{" "}
          <Link href="https://site.themembers.com.br/">The Members</Link>, e
          estou focado em minha jornada de aprendizado e crescimento na área de
          tecnologia.
        </p>
        <br />
        <p>
          Iniciei minha jornada na programação em 2016, explorando inicialmente
          a linguagem C, voltada para microcontroladores como Arduino. Ao longo
          do tempo, expandi meu conhecimento para outras linguagens, incluindo
          Java, JavaScript, PHP, Python, C++, C#, entre outras.
        </p>
        <br />
        <p>
          Estou constantemente buscando aprender novas tecnologias e
          compartilhar meu conhecimento com a comunidade. Acredito que a
          educação é fundamental para o progresso individual e coletivo, e tenho
          paixão por difundir o conhecimento e inspirar outros a se aventurarem
          no mundo da ciência.
        </p>
      </div>
    </Container>
  );
};
