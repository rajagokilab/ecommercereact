import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        padding: "1rem",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: theme === "light" ? "#f3f4f6" : "#111827",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <h1>My Blog</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "4px",
          background: theme === "light" ? "#111827" : "#f3f4f6",
          color: theme === "light" ? "white" : "black",
        }}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
}
