import { FooterText, IconsContainer } from "@/components/Footer/styles";
import { contacts } from "@/constants/contacts";
import { useTheme } from "@/contexts/ThemeContext";
import themeGlobal from "@/styles/designToken";
import React from "react";
import { ContactsContainer, FooterContacts, IconsContacts } from "./styles";

export const Contacts: React.FC = () => {
  const { theme } = useTheme();
  return (
    <ContactsContainer>
      <IconsContacts>
        <p>Entre em contato comigo</p>
        <IconsContainer>
          {contacts.map((item, key) => (
            <a href={item.url} target="_blank" key={key} rel="noreferrer">
              {
                <item.icon
                  fill={`${themeGlobal.color[theme].secondary}`}
                  size={"4rem"}
                />
              }
            </a>
          ))}
        </IconsContainer>
      </IconsContacts>
      <FooterContacts>
        <FooterText>
          &copy; {new Date().getFullYear()} João Paulo Medeiros de Morais |
          Frontend Developer
        </FooterText>
      </FooterContacts>
    </ContactsContainer>
  );
};
