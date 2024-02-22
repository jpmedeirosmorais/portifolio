import tokens from "@/styles/designToken";
import styled, { css } from "styled-components";
export const CardContainer = styled.div`
  ${({ theme }: { theme: "light" | "dark" }) => css`
    background-color: ${tokens.color[theme].contrast4};
    height: 100%;
    padding: 3rem;
    border-radius: 0.5rem;
    text-align: left;
    line-height: 1.5;

    box-shadow: 0rem 0.4rem 0.6rem rgba(0, 0, 0, 0.1),
      0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);

    @media (max-width: 1100px) {
      height: auto;
    }
    @media (max-width: 800px) {
      max-width: 95vw;
      max-height: 100%;
      padding: 1rem;
      h3 {
        font-size: 1.2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  `}
`;
