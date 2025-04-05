// src/hooks/useSearchHistory.js

import { useState, useEffect } from 'react';

const useSearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const addSearch = (city) => {
    if (!searchHistory.includes(city)) {
      setSearchHistory([...searchHistory, city]);
    }
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  return { searchHistory, addSearch, clearSearchHistory };
};

export default useSearchHistory;