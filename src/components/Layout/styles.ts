import themeGlobal from "@/styles/designToken";
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
      cursor: pointer;
      :hover {
        opacity: 0.9;
      }
    }
  }

  .body {
    padding: 5rem;
    display: flex;
    justify-content: center;
  }
`;

export const NavItem = styled.div`
  ${({ selected, theme }: NavItemI) => css`
    padding-inline: 1rem;
    .item {
      position: relative;
      display: inline-block;
      text-decoration: none;
      font-weight: normal;

      ::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 0rem;
        height: 0.1rem;
        background-color: ${themeGlobal.color[theme].secondary};
        transition: all 500ms ease-in-out;
      }

      &:hover::after {
        width: 3rem;
      }
      ${selected &&
      css`
        ::after {
          width: 70%;
        }
      `};
    }
  `}
`;
