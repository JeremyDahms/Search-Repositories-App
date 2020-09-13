import React, { useState } from 'react';

export default function SearchInput(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `/api/query-repositories?searchTerm=${encodeURIComponent(searchTerm)}`,
      {
        headers: {
          accepts: 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        props.handleUpdateResults(result);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Enter your searchTerm: </label>
      <input id='name' type='text' value={searchTerm} onChange={handleChange} />
      <button type='submit'>Submit</button>
    </form>
  );
}
