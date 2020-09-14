import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Table,
  Caption,
  TableHeader,
  TableRow,
  TableData,
  SortButton,
  ArrowUp,
  ArrowDown,
  FilterInput,
} from './styles/results-table-styles';

export default function ResultsTable(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [sortConfig, setSortConfig] = React.useState({
    key: 'stargazers_count',
    direction: 'descending',
  });
  const { searchResults } = props;
  let sortedItems = searchResults.items;

  if (sortedItems) {
    sortedItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  if (languageFilter) {
    sortedItems = sortedItems.filter((item) => {
      if (item.language === null) return false;
      const itemLanguage = item.language.toLowerCase();
      const filterLength = languageFilter.length;
      if (filterLength > itemLanguage) return false;
      return (
        itemLanguage.substr(0, filterLength) === languageFilter.toLowerCase()
      );
    });
  }

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const storeItem = (item) => {
    const body = { item: item };
    fetch('api/store-item', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(setShowDetails(true));
  };

  const handleClick = (item) => {
    setSelectedItemId(item.id);
    storeItem(item);
  };

  const handleFilterChange = (event) => {
    setLanguageFilter(event.target.value);
  };

  const renderSortArrow = (key) => {
    return sortConfig.key !== key ? (
      <ArrowUp />
    ) : sortConfig.direction === 'ascending' ? (
      <ArrowUp />
    ) : (
      <ArrowDown />
    );
  };

  return showDetails ? (
    <Redirect to={`/details/${selectedItemId}`} />
  ) : sortedItems ? (
    <Table>
      <Caption>Repositories</Caption>
      <thead>
        <FilterInput
          placeholder='Filter by Language'
          value={languageFilter}
          onChange={handleFilterChange}
        />
        <tr>
          <TableHeader>
            Name
            <SortButton onClick={() => requestSort('name')}>
              {renderSortArrow('name')}
            </SortButton>
          </TableHeader>
          <TableHeader>
            Stars
            <SortButton onClick={() => requestSort('stargazers_count')}>
              {renderSortArrow('stargazers_count')}
            </SortButton>
          </TableHeader>
          <TableHeader>
            Relevance
            <SortButton onClick={() => requestSort('score')}>
              {renderSortArrow('score')}
            </SortButton>
          </TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedItems.map((item, key) => (
          <TableRow key={item.name + key} onClick={() => handleClick(item)}>
            <TableData>{item.name}</TableData>
            <TableData>{item.stargazers_count}</TableData>
            <TableData>{item.score}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  ) : (
    <div></div>
  );
}
