import { useTheme } from "@/contexts/ThemeContext";
import themeGlobal from "@/styles/designToken";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { type LayoutI } from "./interfaces";
import { layoutOptions } from "./layoutOptions";
import { Container, NavItem } from "./styles";

export const Layout: React.FC<LayoutI> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  return (
    <Container>
      <div className="nav-bar">
        <div className="nav-items">
          {layoutOptions.map((item, key) => (
            <NavItem key={key} selected={location.pathname === item.link}>
              <Link className="item" to={item.link}>
                {item.title}
              </Link>
            </NavItem>
          ))}
        </div>
        <div onClick={toggleTheme} className="theme-container">
          {theme === "light" ? (
            <BsFillSunFill
              color={themeGlobal.color[theme].secondary}
              size="2.5rem"
            />
          ) : (
            <BsFillMoonStarsFill
              color={themeGlobal.color[theme].secondary}
              size="2rem"
            />
          )}
        </div>
      </div>
      <div className="body">{children}</div>
    </Container>
  );
};
