// src/services/api.js

const API_KEY = '2153d72dfaafa1fce3a485102a930fb4';

export const getWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found');
      } else {
        throw new Error('Failed to fetch weather data');
      }
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};