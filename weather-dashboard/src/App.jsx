// App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { getWeatherData, getForecastData } from './services/api';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import { ClipLoader } from 'react-spinners';
import Forecast from './components/Forecast';
import useSearchHistory from './hooks/useSearchHistory';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [forecastLoading, setForecastLoading] = useState(false);
  const [forecastError, setForecastError] = useState(null);
  const { searchHistory, addSearch } = useSearchHistory();

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
      addSearch(city);
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
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-xl p-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-blue-700 dark:text-white">Weather Dashboard</h1>
        <div className="flex justify-center mb-6">
          <SearchBar onSearch={handleSearch} searchHistory={searchHistory} />
        </div>
        <div className="w-full">
          {loading && <ClipLoader size={40} color="#1D4ED8" />}
          {error && <ErrorMessage message={error} />}
          {weatherData && (
            <div className="flex flex-col sm:flex-row sm:justify-around gap-4 w-full">
              <WeatherCard data={weatherData} />
            </div>
          )}
          {forecastLoading && <ClipLoader size={40} color="#1D4ED8" />}
          {forecastError && <ErrorMessage message={forecastError} />}
          {forecastData && (
            <div className="w-full">
              <Forecast forecastData={forecastData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
