import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  body {
    padding-top: 5rem;
    display: flex;
    justify-content: center;
    height: 100%;
  }

  @media (max-width: 500px) {
    body {
      padding-top: 2rem;
    }
  }
`;
