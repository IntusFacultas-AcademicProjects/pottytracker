import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = styled.nav`
    padding: .25em 1em;
    display: flex;
    align-items: center;
    
`;
export const NavbarItemList = styled.ul`
    list-style: none;
    display: flex;
    margin-top: 0;
    padding-left: 0;
    margin-bottom: 0;
`;
export const NavbarItem = styled.li`
    padding: .25em 1em;
    display: flex;
    align-items: center;

`;
export const StyledIcon = styled(FontAwesomeIcon)``;
export const NavbarLink = styled(Link)`
    ${({ theme }) => css`
        ${theme.text.emphasizedText};
    `}
    text-decoration: none;
    display: flex;
    align-items: center;
    color: palevioletred;
    &:hover {
        color: palevioletred;
        text-decoration: none;
    }
    & svg {
        margin: 0 .25em;
    }
    & path  {
        fill: palevioletred
    }
    &:visited {
        color: palevioletred;
    }
`;
export const NavbarBrand = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: palevioletred;
    ${({ theme }) => css`
        ${theme.text.titleText}
    `}
    .navbar__brand__icon {
        height: 30px;
        margin-right: .25em;
        & path  {
            fill: palevioletred
        }
    }
    &:hover {
        color: palevioletred;
        text-decoration: none;
    }
    &:visited {
        color: palevioletred;
    }
`;
export default Navbar;
