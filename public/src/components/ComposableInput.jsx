import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
  ${({ theme }) => css`
    ${theme.text.contentText}
  `}
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: .5em;
  width: 100%;
`;
export const StyledInput = styled.input`
  
  ${({ theme }) => css`
    ${theme.mixins.transition(['box-shadow', '.2s', 'ease-in'])}
    border: 1px solid ${theme.flavors.input};
    border-radius: ${theme.borderRadius};
    ${theme.input.defaultStyling}
    &:focus {
      outline: 0;
      ${theme.mixins.inputBoxShadow(theme.flavors.input)}
    }
  `}
`;
export const ComposableInput = ({ label, input, name }) => (
  <InputContainer>
    <StyledLabel htmlFor={name}>
      {label}
    </StyledLabel>
    {input}
  </InputContainer>
);
ComposableInput.propTypes = {
  label: PropTypes.node.isRequired,
  input: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};
export default ComposableInput;
