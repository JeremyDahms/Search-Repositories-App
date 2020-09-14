import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

const Field = styled.div`
  width: 50%;
  height: 56px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
`;

const Input = styled.input`
  height: 56px;
  width: 100%;
  position: relative;
  padding: 0px 16px;
  border: none;
  border-radius: 4px;
  font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
  font-size: 16px;
  line-height: normal;
  background-color: transparent;
  color: #282828;
  outline: none;
  box-shadow: 0px 4px 20px 0px transparent;
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
    0.1s padding ease-in-out;
  -webkit-appearance: none;
`;

const SubmitButton = styled.button`
  background: #2e5cff;
  width: 10%;
  border-radius: 0.2em;
  font-size: 1.2em;
  color: #ffffff;
  border: none;
  z-index: 2;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`;

export { Form, Field, Input, SubmitButton };
