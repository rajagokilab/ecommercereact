import { useEffect, useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import { useUnit } from "./context/UnitContext";

const API_KEY = "YOUR_OPENWEATHER_API_KEY"; // replace with your key

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { unit, toggleUnit } = useUnit();

  async function fetchWeather(query) {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=${unit}`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  // Bonus: Auto-detect user location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          setLoading(true);
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${unit}`
          );
          const data = await res.json();
          setWeather(data);
        } catch {
          setError("Failed to fetch weather from location");
        } finally {
          setLoading(false);
        }
      });
    }
  }, [unit]);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "2rem auto",
        padding: "1rem",
        background: "#f9fafb",
        borderRadius: "8px",
      }}
    >
      <h1>🌦️ Weather App</h1>
      <button
        onClick={toggleUnit}
        style={{
          marginBottom: "1rem",
          padding: "0.4rem 0.8rem",
          background: "#111827",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Switch to {unit === "metric" ? "°F" : "°C"}
      </button>
      <WeatherForm onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} loading={loading} error={error} />
    </div>
  );
}
