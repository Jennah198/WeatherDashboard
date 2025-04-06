import { useState, useEffect } from 'react';

const useSearchHistory = (limit = 5) => {
  const [searchHistory, setSearchHistory] = useState(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const addSearch = (city) => {
    setSearchHistory((prevHistory) => {
      const updatedHistory = [city, ...prevHistory.filter((item) => item !== city)].slice(0, limit);
      return updatedHistory;
    });
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  return { searchHistory, addSearch, clearSearchHistory };
};

export default useSearchHistory;