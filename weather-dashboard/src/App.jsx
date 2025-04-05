// src/App.js

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { getWeatherData, getForecastData } from './services/api'; // Import getForecastData
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import { ClipLoader } from 'react-spinners';
import Forecast from './components/Forecast'; // Import Forecast

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null); // Add forecastData state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const weather = await getWeatherData(city);
      setWeatherData(weather);

      const forecast = await getForecastData(city); // Fetch forecast data
      setForecastData(forecast); // Store forecast data

    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null); // Clear forecast data on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="mt-6 text-center">
          {loading && <ClipLoader size={40} color="#1D4ED8" />}
          {error && <ErrorMessage message={error} />}
          {weatherData && <WeatherCard data={weatherData} />}
          {forecastData && <Forecast forecastData={forecastData} />} {/* Render Forecast */}
        </div>
      </div>
    </div>
  );
}

export default App;