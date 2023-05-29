import themeGlobal from "@/styles/designToken";
import { animated } from "@react-spring/web";
import styled, { css } from "styled-components";
import { type StyledProps } from "./interfaces";

export const DrawerContainer = styled(animated.div)`
  ${({ theme }: StyledProps) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${themeGlobal.color[theme].contrast};
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `}
`;

export const DrawerContent = styled.div`
  background-color: none;
  padding: 1rem;
`;

export const CloseButton = styled.div`
  background-color: none;
  cursor: pointer;
  position: absolute;
  right: 3rem;
  top: 3rem;
`;
