import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = styled.nav`
    padding: .25em 1em;
    display: flex;
    align-items: flex-end;
    
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
        color: ${theme.flavors.secondary};
        &:hover {
            color: ${theme.flavors.secondary};
            text-decoration: none;
        }
        & path  {
            fill: ${theme.flavors.secondary}
        }
        &:visited {
            color: ${theme.flavors.secondary};
        }
    `}
    text-decoration: none;
    display: flex;
    align-items: center;
`;
export const NavbarBrand = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    ${({ theme }) => css`
        ${theme.text.titleText}
        color: ${theme.flavors.secondary};
        &:hover {
            color: ${theme.flavors.secondary};
            text-decoration: none;
        }
        &:visited {
            color: ${theme.flavors.secondary};
        }
    `}
`;
export default Navbar;
