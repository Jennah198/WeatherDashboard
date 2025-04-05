// src/App.jsx

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { getWeatherData, getForecastData } from './services/api';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import { ClipLoader } from 'react-spinners';
import Forecast from './components/Forecast';
import useSearchHistory from './hooks/useSearchHistory'; // Import useSearchHistory

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [forecastLoading, setForecastLoading] = useState(false);
  const [forecastError, setForecastError] = useState(null);
  const { searchHistory, addSearch } = useSearchHistory(); // Use custom hook

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    setForecastLoading(true);
    setForecastError(null);
    try {
      const weather = await getWeatherData(city);
      setWeatherData(weather);

      const forecast = await getForecastData(city);
      setForecastData(forecast);
      addSearch(city); // Add to search history

    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
      setForecastError(err.message);
    } finally {
      setLoading(false);
      setForecastLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} searchHistory={searchHistory} /> {/* Pass searchHistory */}
        <div className="mt-6 text-center">
          {loading && <ClipLoader size={40} color="#1D4ED8" />}
          {error && <ErrorMessage message={error} />}
          {weatherData && <WeatherCard data={weatherData} />}
          {forecastLoading && <ClipLoader size={40} color="#1D4ED8" />}
          {forecastError && <ErrorMessage message={forecastError} />}
          {forecastData && <Forecast forecastData={forecastData} />}
        </div>
      </div>
    </div>
  );
}

export default App;