export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface StyledProps {
  theme: "light" | "dark";
}
