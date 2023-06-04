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
      top: 8rem;
      position: relative;
    }

    .text-card {
      background-color: ${themeGlobal.color[theme].contrast4};
      max-width: 103.2rem;
      top: 31.4rem;
      box-shadow: 0rem 0.4rem 0.6rem rgba(0, 0, 0, 0.1),
        0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
      padding: 10rem 5rem 5rem 5rem;
      border-radius: 0.5rem;

      p {
        color: ${themeGlobal.color[theme].secondary};
        text-align: justify;
      }
    }

    @media (max-width: 500px) {
      img {
        width: 12rem;
        height: 12rem;
        top: 6rem;
      }

      p {
        font-size: 1.4rem;
      }

      .text-card {
        padding: 7rem 2.5rem 2.5rem 2.5rem;
      }
    }
  `}
`;
