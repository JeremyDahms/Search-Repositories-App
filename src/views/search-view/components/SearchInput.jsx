import React, { useState } from 'react';
import { Form, Field, Input, SubmitButton } from './styles/search-input-styles';

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
