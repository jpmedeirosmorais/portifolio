import tokens from "@/styles/designToken";
import styled, { css } from "styled-components";
export const CardContainer = styled.div`
  ${({ theme }: { theme: "light" | "dark" }) => css`
    background-color: ${tokens.color[theme].contrast4};
    max-width: 60rem;
    max-height: 60rem;
    padding: 3rem;
    border-radius: 0.5rem;
    text-align: justify;
    display: inline-block;

    box-shadow: 0rem 0.4rem 0.6rem rgba(0, 0, 0, 0.1),
      0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
    @media (max-width: 800px) {
      max-width: 90%;
      p {
        font-size: 1.5rem;
      }
    }
  `}
`;
