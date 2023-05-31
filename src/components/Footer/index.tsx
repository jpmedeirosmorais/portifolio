import { useTheme } from "@/contexts/ThemeContext";
import React from "react";

import { contacts } from "@/constants/contacts";
import themeGlobal from "@/styles/designToken";
import { FooterContainer, FooterText, IconsContainer } from "./styles";

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <FooterContainer>
      <IconsContainer>
        {contacts.map((item, key) => (
          <a href={item.url} target="_blank" key={key} rel="noreferrer">
            {
              <item.icon
                fill={`${themeGlobal.color[theme].secondary}`}
                size={"3rem"}
              />
            }
          </a>
        ))}
      </IconsContainer>

      <FooterText>
        &copy; {new Date().getFullYear()} João Paulo Medeiros de Morais |
        Frontend Developer
      </FooterText>
    </FooterContainer>
  );
};
