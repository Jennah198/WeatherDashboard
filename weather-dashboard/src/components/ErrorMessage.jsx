import React from 'react';

const ErrorMessage = ({ message }) => {
  let displayMessage = message;
  let errorType = 'error'; // Default error type

  if (message === 'City not found') {
    displayMessage = 'City not found. Please enter a valid city name.';
    errorType = 'warning';
  } else if (message === 'Failed to fetch weather data') {
    displayMessage = 'Failed to fetch weather data. Please check your network connection or try again later.';
    errorType = 'critical';
  }

  let bgColor = 'bg-red-100'; // Default error background color
  let textColor = 'text-red-700'; // Default error text color

  if (errorType === 'warning') {
    bgColor = 'bg-yellow-100';
    textColor = 'text-yellow-700';
  } else if (errorType === 'critical') {
    bgColor = 'bg-red-200';
    textColor = 'text-red-900';
  }

  return (
    <div className={`mt-4 p-4 rounded ${bgColor} ${textColor}`}>
      <p><strong>Error:</strong> {displayMessage}</p>
    </div>
  );
};

export default ErrorMessage;