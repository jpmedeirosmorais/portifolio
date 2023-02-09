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

const DEFAULT_VALUE: ThemeContextData = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextData>(DEFAULT_VALUE);

export const ThemeContextProvider: React.FC<ThemeContextProviderI> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">(DEFAULT_VALUE.theme);

  const toggleTheme = useCallback((): void => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "light" || localTheme === "dark") {
      setTheme(localTheme);
    }
  }, []);

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
