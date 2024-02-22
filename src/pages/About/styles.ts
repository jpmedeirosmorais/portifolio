import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 5rem 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  .left {
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      object-fit: cover;
    }
  }

  @media (max-width: 1650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(0, 1fr);
    grid-template-areas:
      "card-about-1 left"
      "card-about-1 card-about-2"
      "null card-about-2";

    .left {
      grid-area: left;
    }

    #card-about-1 {
      grid-area: card-about-1;
    }

    #card-about-2 {
      grid-area: card-about-2;
    }
  }

  @media (max-width: 670px) {
    grid-template-areas:
      "card-about-1 left"
      "card-about-1 card-about-2";
  }
`;
