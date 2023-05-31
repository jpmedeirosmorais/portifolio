import React from "react";
import { Card } from "./components/Card";
import { WorksContainer } from "./styles";

export const Works: React.FC = () => {
  const obj = {
    image: "public/images/works/themembers.jpeg",
    url: "https://site.themembers.com.br/",
    description:
      "Como desenvolvedor frontend na The Members, tenho o privilégio de trabalhar em uma empresa inovadora e em constante evolução. Nosso principal foco é criar uma plataforma online envolvente e interativa, onde os membros podem se conectar, compartilhar conhecimentos e desfrutar de conteúdo exclusivo. Através do uso de tecnologias modernas, como HTML, CSS e JavaScript, juntamente com frameworks e bibliotecas populares, criamos um site responsivo e intuitivo que se adapta perfeitamente a diferentes dispositivos. Colaborando com uma equipe talentosa, tenho a oportunidade de aplicar minhas habilidades em desenvolvimento frontend para aprimorar continuamente a experiência dos usuários. Estou orgulhoso de fazer parte da The Members e contribuir para o sucesso contínuo da empresa no mercado de comunidades online.",
    title: "The Members",
  };
  const test = {
    image: "public/images/works/4you2.jpeg",
    url: "https://4you2idiomas.com.br",
    description:
      "Como desenvolvedor frontend, tive o prazer de trabalhar com a 4You2 Idiomas, uma escola de idiomas que se destaca pela sua abordagem inovadora e dinâmica. Durante o projeto, pude colaborar na criação de um site moderno e intuitivo, onde os alunos podem explorar os cursos oferecidos, obter informações sobre a metodologia de ensino e entrar em contato com a equipe da escola. Utilizando tecnologias como HTML, CSS e JavaScript, implementamos um design responsivo e agradável, garantindo uma experiência de usuário excepcional. Foi gratificante contribuir para a presença online da 4You2 Idiomas e ajudar a promover o aprendizado de idiomas de forma acessível e cativante.",
    title: "4you2",
  };

  const iclubs = {
    image: "public/images/works/iclubs.jpeg",
    url: "https://www.iclubs.tech",
    description:
      "A iClubs é uma empresa de tecnologia inovadora que oferece soluções e serviços de ponta para impulsionar o sucesso de seus clientes. Com uma equipe altamente qualificada e experiente, a empresa se dedica a fornecer soluções personalizadas em áreas como desenvolvimento de software, consultoria em TI e serviços de suporte técnico. A iClubs se destaca pela sua abordagem orientada para o cliente, buscando compreender as necessidades e objetivos individuais de cada cliente para entregar resultados excepcionais. Além disso, a empresa está sempre atualizada com as últimas tecnologias e tendências do setor, garantindo que seus clientes estejam à frente da concorrência. Com um compromisso contínuo com a excelência e a inovação, a iClubs é uma parceira confiável para empresas em busca de soluções tecnológicas de qualidade e resultados de alto impacto.",
    title: "iClubs",
  };

  return (
    <WorksContainer>
      <h1>Meus Trabalhos, Projetos e Experiências</h1>
      <Card {...obj} />
      <Card {...iclubs} />
      <Card {...test} />
    </WorksContainer>
  );
};
