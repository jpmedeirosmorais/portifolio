import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-inline: 5rem;
  margin-bottom: 2rem;
  h1 {
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
  }

  @media (max-width: 550px) {
    padding-inline: 1rem;
    h1 {
      font-size: 2.5rem;
    }
  }
`;
