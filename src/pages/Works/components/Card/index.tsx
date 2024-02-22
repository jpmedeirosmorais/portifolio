import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { type CardProps } from "./interfaces";
import { CardContainer, Content, Image, LeftCard, RightCard } from "./styles";
import { Link } from "@/components/Link";

export const Card: React.FC<CardProps> = ({
  image,
  url,
  description,
  title,
}) => {
  const { theme } = useTheme();

  return (
    <CardContainer theme={theme}>
      <LeftCard>
        <Image src={image} />
        <Link href={url}>Ver mais</Link>
      </LeftCard>
      <RightCard>
        <h2>{title}</h2>
        <Content>
          <p>{description}</p>
        </Content>
      </RightCard>
    </CardContainer>
  );
};
