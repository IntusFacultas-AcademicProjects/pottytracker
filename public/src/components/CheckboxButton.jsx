import { React } from 'react';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';

const StyledLabel = styled.label`
  background-color: white;
  border: 2px solid palevioletred;  
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    margin-left: .25em;
  }
  box-sizing: border-box;
  text-align: center;
  & + & {
    margin-top: .5em;
  }
  color: palevioletred;
  & path {
    transition: fill .2s ease-in;
    fill: palevioletred;
  }
  font-size: 1em;
  transition: background-color .2s ease-in, color .2s ease-in, box-shadow .2s ease-in;
  font-weight: bold;
  padding: .25em 1em;
  position: relative;
  border-radius: .25em;
  cursor: pointer;
 

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
  &:focus-within {
    box-shadow: 0px 0px 2px 2px rgba(219, 112, 147, 0.7);
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
