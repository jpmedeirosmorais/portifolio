import styled from "styled-components";

export const AboutContainer = styled.div`
  h2 {
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 5rem;
  }

  h3 {
    margin-bottom: 2rem;
  }

  @media (max-width: 550px) {
    padding-inline: 1rem;
    h2 {
      font-size: 2.5rem;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  .left {
    display: flex;
    flex-direction: column;

    gap: 3rem;
  }
  img {
    width: 60rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 800px) {
    img {
      width: 30rem;
    }
  }
`;
