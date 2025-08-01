"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("light");
  const [isMount, setIsMount] = useState<boolean>(false);
  const setTheme = (newTheme: Theme): void => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const systemTheme = window.matchMedia("prefers-color-scheme: dark").matches
      ? "dark"
      : "light";
    const initalTheme = savedTheme || systemTheme;
    setTheme(initalTheme);
    document.documentElement.classList.toggle("dark", initalTheme === "dark");
    setIsMount(true);
  }, []);
  if (isMount) null;
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("useTheme must be use in Themeprovider");
  return context;
};
