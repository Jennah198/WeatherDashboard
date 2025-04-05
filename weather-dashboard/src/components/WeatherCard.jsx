import React from 'react';

const WeatherCard = ({ data }) => {
  if (!data) return null; // Handle null data

  const { name, main, weather, wind } = data;
  const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <div className="mt-4 p-6 border rounded shadow-md bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4"> {/* Responsive flex direction */}
        <h2 className="text-2xl font-semibold mb-2 md:mb-0">{name}</h2> {/* Responsive margin */}
        <img src={iconUrl} alt={weather[0].description} className="w-16 h-16" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Temperature:</p>
          <p>{main.temp}°C</p>
        </div>
        <div>
          <p className="font-semibold">Humidity:</p>
          <p>{main.humidity}%</p>
        </div>
        <div>
          <p className="font-semibold">Wind Speed:</p>
          <p>{wind.speed} m/s</p>
        </div>
        <div>
          <p className="font-semibold">Weather:</p>
          <p>{weather[0].description}</p>
        </div>
        <div>
          <p className="font-semibold">Feels Like:</p>
          <p>{main.feels_like}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;