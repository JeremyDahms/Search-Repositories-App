import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import ResultsTable from './components/ResultsTable';
import styled from 'styled-components';

export default function SearchView() {
  const [searchResults, setSearchResults] = useState('');

  return (
    <>
      <SearchInput handleUpdateResults={setSearchResults} />
      <ResultsTable searchResults={searchResults} />
    </>
  );
}
