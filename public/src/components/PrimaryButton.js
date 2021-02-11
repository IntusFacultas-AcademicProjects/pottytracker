import styled from 'styled-components';

export const PrimaryButton = styled.button`
  padding: .25em 1em;
  border-radius: .25em;
  border: 2px solid #586994;
  width: 250px;
  height: 40px;
  vertical-align: middle;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  margin-top: 1em;
  background-color: #586994;
  color: white;
  transition: background-color .2s ease-in, box-shadow .2s ease-in;
  &:hover {
    background-color: #2e3c61;
  }
  &:focus {
    outline: 0;
    box-shadow: 0px 0px 2px 2px #a9c1fc;
  }
`;

export default PrimaryButton;
