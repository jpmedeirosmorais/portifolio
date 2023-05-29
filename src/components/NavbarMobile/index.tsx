import { useTheme } from "@/contexts/ThemeContext";
import themeGlobal from "@/styles/designToken";
import React, { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill, BsList } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "../Drawer";
import { layoutOptions } from "./layoutOptions";
import { Container, NavItem } from "./styles";

export const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <Container>
      <Link to="/" className="nav-brand">
        <img src={`svgs/brands/brand-${theme}.svg`} />
      </Link>

      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <BsList fill={themeGlobal.color[theme].secondary} size="2.5rem" />
      </div>

      <Drawer
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="children-drawer">
          <div className="nav-items">
            {layoutOptions.map((item, key) => (
              <NavItem
                key={key}
                selected={location.pathname === item.link}
                theme={theme}
              >
                <Link
                  className="item"
                  to={item.link}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
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
        </div>
      </Drawer>
    </Container>
  );
};
