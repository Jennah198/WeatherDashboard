import React from 'react';

const Forecast = ({ forecastData }) => {
  // Filter to get only one forecast per day (e.g., 12:00 PM)
  const dailyForecast = forecastData.list.filter((item) =>
    item.dt_txt.includes('12:00:00')
  );

  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold mb-4 text-center text-blue-700 dark:text-blue-300">
        5-Day Forecast
      </h3>

      {/* Responsive Horizontal Scroll on small screens, Grid on md+ */}
      <div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto md:overflow-visible pb-2">
        {dailyForecast.map((forecast, index) => {
          const date = new Date(forecast.dt_txt);
          const options = { weekday: 'short' };
          const day = date.toLocaleDateString(undefined, options);

          return (
            <div
              key={index}
              className="min-w-[150px] md:min-w-0 bg-white dark:bg-gray-800 rounded-xl p-4 shadow text-center flex flex-col items-center"
            >
              <p className="text-sm font-medium dark:text-gray-100">{day}</p>
              <img
                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                alt={forecast.weather[0].description}
                className="w-12 h-12"
              />
              <p className="text-blue-800 dark:text-blue-200 font-semibold">
                {Math.round(forecast.main.temp)}°C
              </p>
              <p className="capitalize text-gray-600 dark:text-gray-300 text-sm">
                {forecast.weather[0].description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
