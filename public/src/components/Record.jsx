import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  faTint, faPoop, faBed, faSun, faSpinner,
} from '@fortawesome/free-solid-svg-icons';

export const StyledRecord = styled.div`
  ${({ theme, accident }) => css`
    border-radius: ${theme.borderRadius};
    background-color: ${accident ? theme.flavors.accident : theme.flavors.record};
    display: flex;
    flex-direction: column;
    padding: .5em 1em;
    color: ${theme.flavors.background};
  `}
`;
export const RecordIconRack = styled.div`
  display: flex;
  padding: .25em 0;
  svg + svg {
    margin-left: 1em;
  }
`;
export const RecordFAIcon = styled(FontAwesomeIcon)`
  ${({ active }) => css`
    path {
      fill: white;
    }
    ${active ? css`` : css`
      opacity: .4;
    `}
  `}
`;

export const Record = ({ data }) => {
  if (typeof data === 'undefined') {
    return (<FontAwesomeIcon icon={faSpinner} spin />);
  }
  const formatDate = (date) => date.substring(0, 16).replace('T', ' ');
  return (
    <StyledRecord accident={data.accident ? 1 : 0}>
      {formatDate(data.datetime)}
      <RecordIconRack>
        <RecordFAIcon icon={faTint} active={data.pee ? 1 : 0} />
        <RecordFAIcon icon={faPoop} active={data.poo ? 1 : 0} />
        <RecordFAIcon icon={faBed} active={data.sleep ? 1 : 0} />
        <RecordFAIcon icon={faSun} active={data.awoke ? 1 : 0} />
      </RecordIconRack>
    </StyledRecord>
  );
};
Record.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Record;
