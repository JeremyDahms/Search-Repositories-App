import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import DetailsTable from './components/DetailsTable';
import styled from 'styled-components';

const BackButton = styled.div`
  font-family: sans-serif;
  margin-bottom: 5vh;
  color: #2e5cff;
  :hover {
    cursor: pointer;
  }
`;

const Header = styled.div`
  font-size: 2em;
  font-family: sans-serif;
`;

export default function DetailsView(props) {
  const [displayItem, setDisplayItem] = useState();
  const [goBack, setGoBack] = useState(false);
  const itemId = props.match.params.id;

  useEffect(() => {
    fetch(
      `http://localhost:8080/api/store-item?id=${encodeURIComponent(itemId)}`,
      {
        headers: {
          accepts: 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        const ownerName = result.owner.login;
        const item = {
          'Repository Name': result.name,
          Description: result.description,
          '# of Stars': result.stargazers_count,
          'Language Type': result.language,
          'Owned By': ownerName,
        };
        setDisplayItem(item);
      });
  }, []);

  return goBack ? (
    <Redirect to={'/'} />
  ) : displayItem ? (
    <>
      <BackButton
        onClick={() => {
          setGoBack(true);
        }}
      >
        Return to Search Page
      </BackButton>
      <Header>{`Details for ${displayItem['Repository Name']}`}</Header>
      <DetailsTable displayItem={displayItem} />
    </>
  ) : null;
}
