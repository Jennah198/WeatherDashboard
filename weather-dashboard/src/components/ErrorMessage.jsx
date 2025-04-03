// src/components/ErrorMessage.js

import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="text-red-500 mt-2">
      {message}
    </div>
  );
};

export default ErrorMessage;