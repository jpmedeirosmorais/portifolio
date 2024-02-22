import styled from "styled-components";

export const WorksContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  @media (max-width: 1120px) {
    padding: 2.5rem;

    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.7rem;
    }
  }
`;

export const Experiences = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  justify-content: center;

  gap: 2rem;

  @media (max-width: 2000px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 1120px) {
    grid-template-columns: repeat(3, 1fr);

    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
