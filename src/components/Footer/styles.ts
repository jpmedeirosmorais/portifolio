import styled from "styled-components";

export const FooterContainer = styled.div`
  text-align: center;
  padding: 5rem;
  padding-inline: 1rem;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  height: 20rem;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #888;
`;

export const Link = styled.a`
  color: #333;
  text-decoration: none;
  margin: 0 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconsContainer = styled.div`
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
