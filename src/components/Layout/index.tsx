import { useApp } from "@/contexts/AppContext";
import themeGlobal from "@/styles/designToken";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { type LayoutI } from "./interfaces";
import { Container } from "./styles";

export const Layout: React.FC<LayoutI> = ({ children }) => {
  const { theme, toggleTheme } = useApp();

  return (
    <Container>
      <div className="nav-bar">
        <div onClick={toggleTheme} className="theme-container">
          {theme === "light" ? (
            <BsFillSunFill color={themeGlobal.color[theme].secondary} />
          ) : (
            <BsFillMoonStarsFill color={themeGlobal.color[theme].secondary} />
          )}
        </div>
      </div>
      <div className="body">{children}</div>
    </Container>
  );
};
