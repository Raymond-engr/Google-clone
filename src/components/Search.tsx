import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import LanguageOptions from './LanguageOptions'
import TrendingSearches from './TrendingSearches';
import { mockData, SearchItem } from './Data';

interface SearchProps {
  removeChange: boolean;
}

const Search: React.FC<SearchProps> = ({removeChange}) => {
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [showTrending, setShowTrending] = useState(false);


  const handleSearch = (query: string) => {
    const trimmedQuery = query.toLowerCase().trim();
    const result = mockData.find(item => item.query.toLowerCase() === trimmedQuery);
    setSearchResult(result ? result.info : 'No results found');
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTrending(true);
    }, 2000);
     return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
    <div className="min-h-full flex flex-col items-center justify-center p-4">
      <SearchBar onSearch={handleSearch} />
      
      {removeChange && <LanguageOptions />}
      
      {searchResult && (
        <div className="mt-4 text-gray-800 dark:text-white">
          {searchResult}
        </div>
      )}
      
     {removeChange ? showTrending && (
      <TrendingSearches searches={mockData} onSearchClick={handleSearch} />
      ) : ''}
      
    </div>
    </>
  );
};

export default Search;