import { createContext, useContext, useState } from "react";

const UnitContext = createContext();

export function UnitProvider({ children }) {
  const [unit, setUnit] = useState("metric"); // metric = °C, imperial = °F

  function toggleUnit() {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
  }

  return (
    <UnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
}

export function useUnit() {
  return useContext(UnitContext);
}
