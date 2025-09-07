import { usePreferences } from "../context/PreferencesContext";

export default function Header() {
  const { theme, setTheme, units, setUnits } = usePreferences();

  return (
    <header className="card" style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Fitness Tracker</h1>
      <div>
        <select value={theme} onChange={(e) => setTheme(e.target.value)} className="input">
          <option value="light">🌞 Light</option>
          <option value="dark">🌙 Dark</option>
        </select>
        <select value={units} onChange={(e) => setUnits(e.target.value)} className="input" style={{ marginLeft: "0.5rem" }}>
          <option value="metric">Metric (kg, km)</option>
          <option value="imperial">Imperial (lb, miles)</option>
        </select>
      </div>
    </header>
  );
}
