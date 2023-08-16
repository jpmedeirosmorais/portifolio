import { type TextProps } from "./interfaces";
import React from "react";
import { StyledLink } from "./styles";

export const Link: React.FC<TextProps> = ({ children, href = "" }) => {
  return (
    <StyledLink href={href} target="blank" rel="noreferrer">
      {children}
    </StyledLink>
  );
};
