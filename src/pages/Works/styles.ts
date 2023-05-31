import styled from "styled-components";

export const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  gap: 5rem;
  justify-content: center;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: 50rem) {
    padding: 1rem;

    h1 {
      font-size: 2.5rem;
    }
  }
`;
