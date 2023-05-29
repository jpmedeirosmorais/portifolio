import { useTheme } from "@/contexts/ThemeContext";
import { useSpring } from "@react-spring/web";
import React, { useState } from "react";
import { BsXCircleFill } from "react-icons/bs";
import { type DrawerProps } from "./interfaces";
import { CloseButton, DrawerContainer, DrawerContent } from "./styles";

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { theme } = useTheme();
  const animation = useSpring({
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    opacity: isOpen ? 1 : 0,
    config: {
      tension: 300,
      friction: 24,
    },
    onStart: () => {
      setIsAnimating(true);
    },
    onRest: () => {
      setIsAnimating(false);
    },
  });

  const handleClose: VoidFunction = () => {
    if (!isAnimating) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <DrawerContainer style={animation} theme={theme}>
          <CloseButton onClick={handleClose}>
            <BsXCircleFill size="2.5rem" />
          </CloseButton>
          <DrawerContent>{children}</DrawerContent>
        </DrawerContainer>
      )}
    </>
  );
};
