import { createGlobalStyle, css } from "styled-components";
import themeToken from "./designToken";

interface globalStylesI {
  theme: "light" | "dark";
}

export const GlobalStyles = createGlobalStyle`
  ${({ theme }: globalStylesI) => css`
    html,
    body {
      font-size: 62.5%;
      background: ${themeToken.color[theme].primary};
      transition: all ease-in-out 250ms;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
      font-size: 2rem;
      color: ${themeToken.color[theme].secondary};
    }

    p,
    a {
      font-size: 1.6rem;
    }
  `}
`;
