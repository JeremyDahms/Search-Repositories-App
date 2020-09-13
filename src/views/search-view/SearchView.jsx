import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import ResultsTable from './components/ResultsTable';

export default function SearchView() {
  const [searchResults, setSearchResults] = useState('');

  return (
    <div>
      <SearchInput handleUpdateResults={setSearchResults} />
      <ResultsTable searchResults={searchResults} />
    </div>
  );
}
