import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function ResultsTable(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState('');
  const { searchResults } = props;

  const handleClick = (id) => {
    setSelectedItemId(id);
    setShowDetails(true);
  };

  return showDetails ? (
    <Redirect to={`/details/${selectedItemId}`} />
  ) : searchResults.items ? (
    <table>
      <caption>RESTULSTOO</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Relevance</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.items.map((item, key) => (
          <tr key={item.name + key} onClick={() => handleClick(item.id)}>
            <td>{item.name}</td>
            <td>{item.score}</td>
            <td>{item.stargazers_count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div></div>
  );
}
