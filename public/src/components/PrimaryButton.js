import styled, { css } from 'styled-components';

export const PrimaryButton = styled.button`
  ${({ theme }) => css`
    ${theme.text.contentText};
    ${theme.button.defaultStyling}
    &:focus {
      outline: 0;
      ${theme.mixins.buttonBoxShadow(theme.flavors.primaryHover)}
    }
    ${theme.mixins.transition(['background-color', '.2s', 'ease-in'], ['box-shadow', '.2s', 'ease-in'])}
    border-color: ${theme.flavors.primary};
    background-color: ${theme.flavors.primary};
    color: ${theme.flavors.background};
    &:hover {
      background-color: ${theme.flavors.primaryHover};
    }
  `}
  
`;

export default PrimaryButton;
