import { useState } from 'react';

const useSearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState([]);

  const addSearch = (city) => {
    setSearchHistory((prev) => {
      const updated = [city, ...prev.filter((c) => c !== city)].slice(0, 5);
      return updated;
    });
  };

  return { searchHistory, addSearch };
};

export default useSearchHistory;
