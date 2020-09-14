import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 1vh;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 60%;
  border: none;
  th,
  td {
    border: none;
    text-align: left;
  }
  th,
  td,
  tr {
    padding: 2vh;
  }
  th {
    text-align: left;
  }
`;
const TableRow = styled.tr`
  background: white;
  font-size: 1.2em;
`;

const TableData = styled.td`
  height: 100%;
  :nth-child(1) {
    background-color: #eeeeee;
  }
`;

export default function DetailsTable(props) {
  const { displayItem } = props;
  return displayItem ? (
    <Table>
      <tbody>
        {Object.keys(displayItem).map((key, index) => (
          <TableRow key={key}>
            <TableData>{key}</TableData>
            <TableData>{displayItem[key]}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  ) : null;
}
