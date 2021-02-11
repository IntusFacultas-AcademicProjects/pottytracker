import React from 'react';
import PropTypes from 'prop-types';

export const PottyForm = (props) => {
  const { children } = props;
  return (
    <form className="mainform">
      <h1>Record Incident</h1>
      {children}
    </form>
  );
};
PottyForm.propTypes = {
  children: PropTypes.node,
};
PottyForm.defaultProps = {
  children: '',
};
export default PottyForm;
