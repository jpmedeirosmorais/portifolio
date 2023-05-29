import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  body {
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 500px) {
    body {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
`;
