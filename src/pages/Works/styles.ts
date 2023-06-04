import styled from "styled-components";

export const WorksContainer = styled.div`
  padding: 3rem;
  h1 {
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
  }
  @media (max-width: 50rem) {
    padding: 1rem;

    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const Experiences = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;

  @media (max-width: 50rem) {
    padding: 1rem;

    h1 {
      font-size: 2.5rem;
    }
  }
`;
