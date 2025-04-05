// src/components/SearchBar.jsx

import React, { useState } from 'react';

const SearchBar = ({ onSearch, searchHistory }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
    console.log('Input changed:', event.target.value);
  };

  const handleSearch = () => {
    console.log('Search button clicked, city:', city);
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed, city:', city);
      handleSearch();
    }
  };

  return (
    <div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {searchHistory && searchHistory.length > 0 && (
        <div className="mt-2">
          <p>Recent Searches:</p>
          {searchHistory.map((item) => (
            <button
              key={item}
              onClick={() => {
                onSearch(item);
                setCity(item);
              }}
              className="mr-2 border rounded p-1 text-sm bg-gray-100 hover:bg-gray-200"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;