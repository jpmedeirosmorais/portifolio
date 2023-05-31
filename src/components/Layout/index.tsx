import { type VoidFunction } from "@/interfaces/utilsInterfaces";
import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { NavbarMobile } from "../NavbarMobile";
import { type LayoutI } from "./interfaces";
import { Container } from "./styles";

export const Layout: React.FC<LayoutI> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  useLayoutEffect(() => {
    const handleResize: VoidFunction = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      {windowWidth > 630 ? <Navbar /> : <NavbarMobile />}
      <body>{children}</body>
      {location.pathname !== "/contato" && <Footer />}
    </Container>
  );
};
