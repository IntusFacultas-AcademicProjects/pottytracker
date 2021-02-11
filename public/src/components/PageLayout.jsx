import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet } from '@fortawesome/free-solid-svg-icons';
import { Navbar, NavbarBrand } from './Navbar';

const PageSkeleton = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
`;

const MainContent = styled.div`
    flex: 1;
`;

export const PageLayout = (props) => {
  const { children } = props;
  return (
    <PageSkeleton>
      <Navbar className="navbar">
        <NavbarBrand to="/">
          <FontAwesomeIcon className="navbar__brand__icon" icon={faToilet} size="lg" />
          Potty Tracker
        </NavbarBrand>
      </Navbar>
      <MainContent>
        {children}
      </MainContent>
    </PageSkeleton>
  );
};
PageLayout.propTypes = {
  children: PropTypes.element,
};
PageLayout.defaultProps = {
  children: '',
};
export default PageLayout;
