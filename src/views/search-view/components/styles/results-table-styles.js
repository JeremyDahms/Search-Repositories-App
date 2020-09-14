import styled from 'styled-components';

const Table = styled.table`
  margin-top: 4vh;
  border-collapse: separate;
  border-spacing: 0 15px;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 60%;
  border: none;
  th,
  td {
    border: none;
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

const Caption = styled.caption`
  font-size: 1.5em;
  font-weight: bold;
  text-align: left;
  margin-bottom: 3vh;
`;

const TableHeader = styled.th`
  font-size: 1.2em;
`;

const TableRow = styled.tr`
  background: white;
  font-size: 1.2em;
  line-height: 2em;
  :hover {
    cursor: pointer;
    color: #2e5cff;
  }
`;

const TableData = styled.td`
  width: 33%;
`;

const SortButton = styled.button`
  border: none;
`;

const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-bottom: 0.5em solid black;
`;

const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-top: 0.5em solid black;
`;

const FilterInput = styled.input`
  padding: 0px 16px;
  border: none;
  border-radius: 0.5em;
  line-height: 2em;
`;

export {
  Table,
  Caption,
  TableHeader,
  TableRow,
  TableData,
  SortButton,
  ArrowUp,
  ArrowDown,
  FilterInput,
};
