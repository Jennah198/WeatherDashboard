import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center w-full max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-300">{name}</h2>
      <p className="capitalize text-gray-600 dark:text-gray-400">{weather[0].description}</p>
      
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
        className="mx-auto w-20 h-20 my-4"
      />

      <div className="space-y-2 text-gray-800 dark:text-gray-100">
        <p><span className="font-semibold">Temperature:</span> {Math.round(main.temp)}°C</p>
        <p><span className="font-semibold">Feels Like:</span> {Math.round(main.feels_like)}°C</p>
        <p><span className="font-semibold">Humidity:</span> {main.humidity}%</p>
        <p><span className="font-semibold">Wind:</span> {wind.speed} m/s</p>
        <p><span className="font-semibold">Pressure:</span> {main.pressure} hPa</p>
      </div>
    </div>
  );
};

export default WeatherCard;
