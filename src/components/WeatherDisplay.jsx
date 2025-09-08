export default function WeatherDisplay({ weather, loading, error }) {
  if (loading) return <p>⏳ Loading weather...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!weather) return <p>Search for a city or allow location access.</p>;

  return (
    <div
      style={{
        marginTop: "1rem",
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: "white",
      }}
    >
      <h2>{weather.name}</h2>
      <p>🌡️ Temperature: {weather.main.temp}°</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌥️ Condition: {weather.weather[0].description}</p>
    </div>
  );
}
