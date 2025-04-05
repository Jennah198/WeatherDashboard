// src/App.jsx

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { getWeatherData, getForecastData } from './services/api';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import { ClipLoader } from 'react-spinners';
import Forecast from './components/Forecast';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [forecastLoading, setForecastLoading] = useState(false); // Add forecastLoading state
  const [forecastError, setForecastError] = useState(null); // Add forecastError state

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    setForecastLoading(true); // Set forecast loading to true
    setForecastError(null); // Clear forecast error

    try {
      const weather = await getWeatherData(city);
      setWeatherData(weather);

      const forecast = await getForecastData(city);
      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
      setForecastError(err.message); // Set forecast error
    } finally {
      setLoading(false);
      setForecastLoading(false); // Set forecast loading to false
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
          {forecastLoading && <ClipLoader size={40} color="#1D4ED8" />} {/* Forecast loading */}
          {forecastError && <ErrorMessage message={forecastError} />} {/* Forecast error */}
          {forecastData && <Forecast forecastData={forecastData} />}
        </div>
      </div>
    </div>
  );
}

export default App;