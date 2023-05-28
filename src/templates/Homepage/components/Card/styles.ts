import themeGlobal from "@/styles/designToken";
import styled, { css } from "styled-components";
import { type ContainerProps } from "./interfaces";

export const Container = styled.div`
  ${({ theme }: ContainerProps) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      border-radius: 50%;
      width: 18rem;
      height: 18rem;
      z-index: 1;
    }

    .text-card {
      background-color: ${themeGlobal.color[theme].tertiary};
      position: absolute;
      width: 103.2rem;

      top: 31.4rem;
      box-shadow: 0.4rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      padding: 10rem 5rem 5rem 5rem;
      border-radius: 0.5rem;

      p {
        color: ${themeGlobal.color[theme].secondary};
      }
    }
  `}
`;
