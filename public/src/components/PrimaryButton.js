import styled, { css } from 'styled-components';

export const PrimaryButton = styled.button`
  ${({ theme }) => css`
    ${theme.text.contentText};
    ${theme.button.defaultStyling}
    &:focus {
      outline: 0;
      box-shadow: ${theme.button.boxShadowSizes} #a9c1fc;
    }
  `}
  border-color: #586994;
  background-color: #586994;
  color: white;
  transition: background-color .2s ease-in, box-shadow .2s ease-in;
  &:hover {
    background-color: #2e3c61;
  }
`;

export default PrimaryButton;
