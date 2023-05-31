import { useTheme } from "@/contexts/ThemeContext";
import { useSpring } from "@react-spring/web";
import React from "react";
import { BsXCircleFill } from "react-icons/bs";
import { type DrawerProps } from "./interfaces";
import { CloseButton, DrawerContainer, DrawerContent } from "./styles";

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const { theme } = useTheme();

  const animation = useSpring({
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    opacity: isOpen ? 1 : 0,
    config: {
      tension: 300,
      friction: 24,
    },
  });

  return (
    <DrawerContainer style={animation} theme={theme}>
      <CloseButton onClick={onClose}>
        <BsXCircleFill size="2.5rem" />
      </CloseButton>
      <DrawerContent>{children}</DrawerContent>
    </DrawerContainer>
  );
};
