import { React } from 'react';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';

const StyledLabel = styled.label`
  ${({ theme }) => css`
    ${theme.text.contentText}
    ${theme.button.defaultStyling}
    &:focus-within {
      box-shadow: ${theme.button.boxShadowSizes} rgba(219, 112, 147, 0.7);
    }
    & path {
      transition: fill ${theme.button.transitionTiming} ease-in;
      fill: palevioletred;
    }
    transition: background-color ${theme.button.transitionTiming} ease-in, color ${theme.button.transitionTiming} ease-in, box-shadow ${theme.button.transitionTiming} ease-in;
  `}
  background-color: white;
  border-color: palevioletred;  
  color: palevioletred;
  & input {
    -webkit-appearance: none;
    opacity: 0;
    -moz-appearance: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    cursor: pointer;
    margin: 0;
  }
  & input:focus {
    outline: 0;
  }
  & input:disabled {
    cursor: not-allowed;
  }
  ${({ checked, disabled }) => css`
    ${checked ? css`
      background-color: palevioletred;
      color: white;
      & path {
        fill: white;
      }
    ` : ''}
    ${disabled ? css`
      opacity: .6;
    ` : ''}
  `}
`;

export const CheckboxButton = ({
  checked, children, name, onChange, disabled,
}) => (
  <StyledLabel htmlFor={name} checked={checked} disabled={disabled}>
    {children}
    <input disabled={disabled} onChange={onChange} type="checkbox" id={name} name={name} />
  </StyledLabel>
);

CheckboxButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

CheckboxButton.defaultProps = {
  disabled: false,
};
export default CheckboxButton;
