import themeGlobal from "@/styles/designToken";
import styled, { css } from "styled-components";
import { type NavItemI } from "./interfaces";

export const Container = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2.5rem;

  .nav-brand {
  }

  .nav-items {
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    .item {
    }
  }
  .theme-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    :hover {
      opacity: 0.9;
    }

    span {
      position: relative;
      top: 0.1rem;
      font-size: medium;
      margin-right: 0.5rem;
    }
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
        height: 0.2rem;
        background-color: ${themeGlobal.color[theme].contrast};
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
