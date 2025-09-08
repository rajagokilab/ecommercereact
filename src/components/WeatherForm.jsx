import { useState } from "react";

export default function WeatherForm({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{ padding: "0.5rem", width: "70%" }}
      />
      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          marginLeft: "0.5rem",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Search
      </button>
    </form>
  );
}
