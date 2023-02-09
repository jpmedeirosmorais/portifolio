import styled, { css } from "styled-components";
import { type NavItemI } from "./interfaces";

export const Container = styled.div`
  width: 100%;

  .nav-bar {
    width: 100%;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 2.5rem;

    .nav-items {
      display: flex;

      .item {
      }
    }
    .theme-container {
      position: absolute;
      right: 5rem;
    }
  }

  .body {
    padding: 5rem;
    display: flex;
    justify-content: center;
  }
`;

export const NavItem = styled.div`
  ${({ selected }: NavItemI) => css`
    padding-inline: 1rem;
    .item {
      text-decoration: none;
      font-weight: bold;
      text-decoration: ${selected ? "underline" : "none"};
    }
  `}
`;
