import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { type CardProps } from "../../interfaces";
import { CardContainer } from "./styles";

export const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  const { theme } = useTheme();
  return (
    <CardContainer theme={theme} {...rest}>
      {children}
    </CardContainer>
  );
};
