import { createContext, useContext, useState, useEffect } from "react";

const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [units, setUnits] = useState("metric"); // metric or imperial

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <PreferencesContext.Provider value={{ theme, setTheme, units, setUnits }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  return useContext(PreferencesContext);
}
