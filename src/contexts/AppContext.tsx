import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface AppContextData {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

interface AppContextProviderI {
  children: ReactNode;
}

const DEFAULT_VALUE: AppContextData = {
  theme: "light",
  toggleTheme: () => {},
};

export const AppContext = createContext<AppContextData>(DEFAULT_VALUE);

export const AppContextProvider: React.FC<AppContextProviderI> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">(DEFAULT_VALUE.theme);

  const toggleTheme = useCallback((): void => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp: () => AppContextData = () => {
  return useContext(AppContext);
};
