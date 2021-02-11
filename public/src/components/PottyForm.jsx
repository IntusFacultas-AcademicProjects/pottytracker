import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const PottyForm = (props) => {
  const { children } = props;
  return (
    <StyledForm>
      <h1>Record Incident</h1>
      {children}
    </StyledForm>
  );
};
PottyForm.propTypes = {
  children: PropTypes.node,
};
PottyForm.defaultProps = {
  children: '',
};
export default PottyForm;
