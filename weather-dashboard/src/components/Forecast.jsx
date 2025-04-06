import React from 'react';

const Forecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.list || !Array.isArray(forecastData.list)) {
    return (
      <div className="text-red-500 mt-4">
        Error: Unable to fetch forecast data. Please try again later.
      </div>
    );
  }

  const dailyForecasts = {};
  forecastData.list.forEach((item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!dailyForecasts[date]) {
      dailyForecasts[date] = [];
    }
    dailyForecasts[date].push(item);
  });

  const dailyForecastList = Object.keys(dailyForecasts).map((date) => {
    const middayForecast = dailyForecasts[date].find((item) =>
      item.dt_txt.includes('12:00:00')
    );
    return middayForecast || dailyForecasts[date][0];
  });

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">5-Day Forecast</h2>
      <div className="flex overflow-x-auto space-x-4">
        {dailyForecastList.map((forecast) => (
          <div
            key={forecast.dt}
            className="p-4 border rounded shadow-md bg-white min-w-[180px]"
          >
            <p className="font-semibold mb-2 text-blue-700">
              {new Date(forecast.dt * 1000).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
            </p>
            <img
              src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
              alt={`Forecast icon: ${forecast.weather[0].description}`}
              className="w-12 h-12 mx-auto mb-2"
            />
            <div className="flex flex-col">
              <p>Temperature: {forecast.main.temp}°C</p>
              <p>Humidity: {forecast.main.humidity}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;