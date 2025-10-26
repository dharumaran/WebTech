import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [currentTemp, setCurrentTemp] = useState(null);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  async function getWeather() {
    setError("");
    setWeatherData([]);
    setLocation("");
    setCurrentTemp(null);

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`;
      const geoRes = await fetch(geoUrl);
      const geoData = await geoRes.json();

      if (!geoData.results?.length) {
        throw new Error("City not found.");
      }

      const { latitude, longitude, name, country } = geoData.results[0];
      setLocation(`${name}, ${country}`);

      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m,uv_index,precipitation`;
      const weatherRes = await fetch(weatherUrl);
      const weatherJson = await weatherRes.json();

      const { current_weather: current, hourly } = weatherJson;

      setCurrentTemp(current.temperature);

      const metrics = [
        { icon: "fas fa-wind", label: "Wind (km/h)", value: current.windspeed },
        { icon: "fas fa-compass", label: "Direction (°)", value: current.winddirection },
        { icon: "fas fa-water", label: "Humidity (%)", value: hourly.relative_humidity_2m[0] },
        { icon: "fas fa-sun", label: "UV Index", value: hourly.uv_index[0] },
        { icon: "fas fa-cloud-rain", label: "Rain (mm)", value: hourly.precipitation[0] },
        { icon: "fas fa-temperature-high", label: "Temp (°C)", value: current.temperature },
      ];

      setWeatherData(metrics);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <button id="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <main>
        <h1>Weather Checker</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={getWeather}>Check</button>
        </div>

        {location && (
          <section className="location">
            <h2>{location}</h2>
            {currentTemp !== null && <p className="current-temp">{currentTemp}°C</p>}
          </section>
        )}

        {error && <p className="error">{error}</p>}

        <section className="weather-container">
          {weatherData.map(({ icon, label, value }, i) => (
            <div key={i} className="card">
              <i className={icon}></i>
              <div className="label">{label}</div>
              <div className="value">{value}</div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
