import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {
  Navbar, NavbarBrand,
  NavbarItemList,
  NavbarItem,
  NavbarLink,
} from './Navbar';
import IconographicLabel from './IconographicLabel';

const PageSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`;

const MainContent = styled.div`
  flex: 1;
`;

export const PageLayout = ({ children }) => (
  <PageSkeleton>
    <Navbar className="navbar">
      <NavbarBrand to="/">
        <FontAwesomeIcon className="navbar__brand__icon" icon={faToilet} size="lg" />
        <IconographicLabel>
          Potty Tracker
        </IconographicLabel>
      </NavbarBrand>
      <NavbarItemList>
        <NavbarItem>
          <NavbarLink to="/calendar">
            <IconographicLabel>
              Calendar
            </IconographicLabel>
            <FontAwesomeIcon icon={faCalendarAlt} size="sm" />
          </NavbarLink>
        </NavbarItem>
      </NavbarItemList>
    </Navbar>
    <MainContent>
      {children}
    </MainContent>
  </PageSkeleton>
);
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageLayout;
