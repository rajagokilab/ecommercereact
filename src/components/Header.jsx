import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1>Task Manager</h1>
        <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
          Lightweight to-do with auto-sync
        </p>
      </div>
      <div>
        <span style={{ marginRight: "0.5rem" }}>Theme: {theme}</span>
        <button className="btn" onClick={toggleTheme}>Toggle</button>
      </div>
    </header>
  );
}
