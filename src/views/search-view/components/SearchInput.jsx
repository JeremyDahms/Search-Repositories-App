import React, { useState, useEffect } from 'react';
import { Form, Field, Input, SubmitButton } from './styles/search-input-styles';
import { useLocation } from 'react-router-dom';

export default function SearchInput(props) {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const search = query.get('search');
  const [searchTerm, setSearchTerm] = useState(search || '');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callApi();
  };

  const callApi = () => {
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

  useEffect(() => {
    if (search) {
      callApi();
    }
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Input
          id='name'
          type='text'
          value={searchTerm}
          placeholder='Enter search query here'
          onChange={handleChange}
        />
      </Field>

      <SubmitButton type='submit'>Submit</SubmitButton>
    </Form>
  );
}
