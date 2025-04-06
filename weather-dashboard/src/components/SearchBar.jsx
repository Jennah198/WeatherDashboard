import React, { useState } from 'react';

const SearchBar = ({ onSearch, searchHistory }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex">
        <input
          type="text"
          placeholder="Enter city..."
          className="flex-grow p-2 rounded-l-md border border-blue-300 focus:outline-none"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Show recent searches (session-only) */}
      {searchHistory.length > 0 && (
        <div className="mt-3 text-sm text-gray-600">
          <span className="font-medium text-gray-800">Recent searches:</span>
          <ul className="flex flex-wrap gap-2 mt-1">
            {searchHistory.map((item, idx) => (
              <li
                key={idx}
                className="bg-gray-100 px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200"
                onClick={() => onSearch(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
