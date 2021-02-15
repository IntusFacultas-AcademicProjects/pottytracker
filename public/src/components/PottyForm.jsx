import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const PottyForm = ({ children }) => (
  <StyledForm>
    <h1>Record Incident</h1>
    {children}
  </StyledForm>
);
PottyForm.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PottyForm;
