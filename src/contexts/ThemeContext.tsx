import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface ThemeContextData {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

interface ThemeContextProviderI {
  children: ReactNode;
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const localStorageTheme = localStorage.getItem("theme");

const getTheme = (): "light" | "dark" => {
  if (localStorageTheme === "light" || localStorageTheme === "dark") {
    return localStorageTheme;
  }
  return prefersDark ? "dark" : "light";
};

const DEFAULT_VALUE: ThemeContextData = {
  theme: getTheme(),
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextData>(DEFAULT_VALUE);

export const ThemeContextProvider: React.FC<ThemeContextProviderI> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">(DEFAULT_VALUE.theme);

  if (typeof theme === "undefined") {
    return null;
  }

  const toggleTheme = useCallback((): void => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme: () => ThemeContextData = () => {
  return useContext(ThemeContext);
};
