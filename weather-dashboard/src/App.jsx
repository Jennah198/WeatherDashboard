import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { getWeatherData } from './services/api';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import { ClipLoader } from 'react-spinners'; // Import ClipLoader

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8"> {/* Responsive padding */}
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="mt-6 text-center">
          {loading && <ClipLoader size={40} color="#1D4ED8" />}
          {error && <ErrorMessage message={error} />}
          {weatherData && <WeatherCard data={weatherData} />}
        </div>
      </div>
    </div>
  );
}

export default App;