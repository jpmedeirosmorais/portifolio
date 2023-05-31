import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { type CardProps } from "./interfaces";
import { CardContainer, Image, LeftCard, RightCard } from "./styles";

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
        <a href={url} target="_blank" rel="noreferrer">
          Ver projeto
        </a>
      </LeftCard>
      <RightCard>
        <h2>{title}</h2>
        <p>{description}</p>
      </RightCard>
    </CardContainer>
  );
};
