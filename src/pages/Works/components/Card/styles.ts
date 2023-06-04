import designTokens from "@/styles/designToken";
import styled, { css } from "styled-components";
import { type CardContainerProps } from "./interfaces";

export const CardContainer = styled.div`
  ${({ theme }: CardContainerProps) => css`
    display: flex;
    gap: 2rem;
    padding: 2rem;
    background-color: ${designTokens.color[theme].contrast4};
    border-radius: 1rem;

    box-shadow: 0rem 0.4rem 0.6rem rgba(0, 0, 0, 0.1),
      0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);

    @media (max-width: 70rem) {
      flex-direction: column;

      padding: 1rem;
      padding-top: 3rem;
    }
  `}
`;

export const Image = styled.img`
  width: 40rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: all ease-in-out 250ms;

  @media (min-width: 97rem) {
    :hover {
      transform: scale(1.05);
      box-shadow: 0rem 0.4rem 0.6rem rgba(0, 0, 0, 0.1),
        0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 70rem) {
    width: 25rem;
  }

  @media (max-width: 40rem) {
    width: 100%;
  }
`;

export const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  a {
    font-size: 1.5rem;
    text-decoration: none;
  }

  @media (max-width: 70rem) {
    a {
      font-size: 1.3rem;
    }
  }
`;

export const RightCard = styled.div`
  width: 40rem;
  height: 26rem;
  text-align: justify;

  h2 {
    margin-bottom: 2rem;
  }

  @media (max-width: 70rem) {
    width: 25rem;
    height: 23rem;
    h2 {
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
    }
    p {
      font-size: 1.3rem;
      position: relative;
    }
  }

  @media (max-width: 40rem) {
    width: 100%;
  }
`;

export const Content = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }

  position: relative;
  overflow: auto;
  max-height: 80%;

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px; /* Altura do indicador */
    background-color: rgba(0, 0, 0, 0.5); /* Cor do indicador */
    display: none; /* Inicialmente oculto */
  }
  .overlay.show {
    display: block;
  }

  p {
    font-size: 1.6rem;
  }

  @media (max-width: 70rem) {
    p {
      font-size: 1.3rem;
      position: relative;
    }
  }
`;
