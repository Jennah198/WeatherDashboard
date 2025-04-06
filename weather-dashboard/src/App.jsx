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
  const { searchHistory, addSearch, clearSearchHistory } = useSearchHistory();

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
      if (err.message === 'City not found') {
        setError('City not found. Please enter a valid city name.');
      } else if (err.message === 'Network error') {
        setError('Network error. Please check your internet connection.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      setWeatherData(null);
      setForecastData(null);
      setForecastError(err.message);
    } finally {
      setLoading(false);
      setForecastLoading(false);
    }
  };

  const handleRetry = () => {
    if (weatherData === null && error !== null) {
      handleSearch(searchHistory[0]);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col justify-center min-h-[80vh]">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-700">Weather Dashboard</h1>

        <div className="flex justify-center mb-6">
          <SearchBar onSearch={handleSearch} searchHistory={searchHistory} />
          {searchHistory.length > 0 && (
            <button
              className="ml-2 px-3 py-1 bg-gray-200 rounded text-sm"
              onClick={clearSearchHistory}
            >
              Clear History
            </button>
          )}
        </div>

        <div className="mt-6 w-full">
          {loading && (
            <div className="flex flex-col items-center">
              <ClipLoader size={40} color="#1D4ED8" />
              <p className="mt-2 text-sm text-gray-600">Loading weather data...</p>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center">
              <ErrorMessage message={error} />
              <button
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-sm"
                onClick={handleRetry}
              >
                Retry
              </button>
            </div>
          )}

          {weatherData && (
            <div className="flex flex-col md:flex-row md:justify-around items-center gap-4 w-full">
              <WeatherCard data={weatherData} />
            </div>
          )}

          {forecastLoading && (
            <div className="flex flex-col items-center mt-4">
              <ClipLoader size={40} color="#1D4ED8" />
              <p className="mt-2 text-sm text-gray-600">Loading forecast data...</p>
            </div>
          )}

          {forecastError && <ErrorMessage message={forecastError} />}

          {forecastData && (
            <div className="w-full mt-4">
              <Forecast forecastData={forecastData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;