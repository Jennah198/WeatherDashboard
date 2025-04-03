// src/components/WeatherCard.js

import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="mt-4 p-4 border rounded">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Weather: {weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
        alt={weather[0].description}
        className="inline"
      />
    </div>
  );
};

export default WeatherCard;