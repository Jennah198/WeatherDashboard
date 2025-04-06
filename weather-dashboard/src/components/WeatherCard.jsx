import React from 'react';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">
        {data.name}, {data.sys.country}
      </h2>
      <div className="flex items-center mb-4">
        <img
          src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt={`Weather icon: ${data.weather[0].description}`}
          className="w-20 h-20 mr-4"
        />
        <p className="text-4xl font-bold">{data.main.temp}°C</p>
      </div>
      <p className="text-lg mb-4">{data.weather[0].description}</p>
      <div className="flex flex-col">
        <p>Temperature: {data.main.temp}°C</p>
        <p>Wind Speed: {data.wind.speed} m/s</p>
        <p>Humidity: {data.main.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherCard;