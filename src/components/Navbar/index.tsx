import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { layoutOptions } from "./layoutOptions";
import { Container, NavItem } from "./styles";

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  return (
    <Container>
      <Link to="/" className="nav-brand">
        <img src={`svgs/brands/brand-${theme}.svg`} />
      </Link>
      <div className="nav-items">
        {layoutOptions.map((item, key) => (
          <NavItem
            key={key}
            selected={location.pathname === item.link}
            theme={theme}
          >
            <Link className="item" to={item.link}>
              {item.title}
            </Link>
          </NavItem>
        ))}
      </div>
      <div onClick={toggleTheme} className="theme-container">
        <span>{theme === "light" ? "Light" : "Dark"}</span>
        {theme === "light" ? (
          <BsFillSunFill fill="#f49e12" size="2.5rem" />
        ) : (
          <BsFillMoonStarsFill fill="#3a698d" size="2rem" />
        )}
      </div>
    </Container>
  );
};
