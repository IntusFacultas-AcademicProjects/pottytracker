import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButtonGroup = styled.div`
  
 ${({ horizontal, theme }) => (horizontal ? css`
    button + button {
      border-radius: 0;
    }
    label  + label {
      border-radius: 0;
    }
    button:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    label:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    & > button:last-of-type {
      border-top-right-radius: ${theme.borderRadius};
      border-bottom-right-radius: ${theme.borderRadius};
    }
    & > label:last-of-type {
      border-top-right-radius: ${theme.borderRadius};
      border-bottom-right-radius: ${theme.borderRadius};
    }
 ` : css`
  flex-direction: column;
  label + label {
    margin-top: .5em;
  }
  label + button {
    margin-top: .5em;
  }
 `)}
  display: flex;
  width: 100%;
`;

export const ButtonGroup = ({ children, horizontal }) => (
  <StyledButtonGroup horizontal={horizontal}>{children}</StyledButtonGroup>);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  horizontal: PropTypes.bool,
};
ButtonGroup.defaultProps = {
  horizontal: false,
};

export default ButtonGroup;
