import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  label + label {
    margin-top: .5em;
  }
  label + button {
    margin-top: .5em;
  }
  width: 100%;
`;

export const ButtonGroup = ({ children }) => (
  <StyledButtonGroup>
    {children}
  </StyledButtonGroup>
);
ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ButtonGroup;
