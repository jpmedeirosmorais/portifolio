import { type ReactNode } from "react";

export interface LayoutOptions {
  title: string;
  link: string;
}

export interface LayoutI {
  children: ReactNode;
}
