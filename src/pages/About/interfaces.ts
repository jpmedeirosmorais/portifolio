import { type ReactNode } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
